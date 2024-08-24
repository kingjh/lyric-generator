from time import time
from datetime import datetime
import pandas as pd
import requests
import opencc
import shutil
import os


HEADER = '7.20杨千嬅小众许愿专题歌友会'
FOOTER = '广州港乐歌友会'
EXCLUDED_ROLES = ['编曲', '制作人', '监制', 'OP', 'SP']
DEFAULT_SINGER = '默认歌手'
song_infos = {}


def count_cover_back_files(word):
    # 获取文件夹下的所有文件
    files = os.listdir('template/input/img')

    # 统计以“封面”开头的文件数量
    count = sum(1 for file in files if file.startswith(word))

    return count


def extract_song(album_cover, lyrics):
    song_info = {'albumCover': album_cover}
    song_info['lyrics'] = []
    curr_singer = DEFAULT_SINGER

    # 分析歌词列表
    for lyric in lyrics:
        line_lyric = lyric['lineLyric']

        if ' - ' in line_lyric:
            song_info['songName'] = line_lyric.split(' - ')[0]
        else:
            words = line_lyric.split('：')
            if len(words) > 1:
                if any(role in words[0] for role in EXCLUDED_ROLES):
                    continue

                if line_lyric.find('词') != -1:
                    song_info['lyricist'] = words[1]
                    continue
                elif line_lyric.find('曲') != -1:
                    song_info['composer'] = words[1]
                    continue

                if words[0] != curr_singer:
                    curr_singer = words[0]

                line_lyric = words[1]

            if line_lyric:
                # 转换为简体，中文空格转为英文空格
                song_info['lyrics'].append(f'{curr_singer}|{cc.convert(line_lyric.replace("　", " "))}')

    return song_info


def get_song_info(sid):
    search_url = f'https://yinyue.kuwo.cn/openapi/v1/www/lyric/getlyric?musicId={sid}'
    response = requests.get(search_url)
    return response.json()


def gen_song_infos(song_id, song_name, artist_name):
    # 搜索歌曲ID
    search_url = f'https://yinyue.kuwo.cn/search/searchMusicBykeyWord?vipver=1&client=kt&ft=music&cluster=0&strategy=2012&encoding=utf8&rformat=json&mobi=1&issubtitle=1&show_copyright_off=1&pn=0&rn=20&all={song_name}  {artist_name}'
    response = requests.get(search_url)
    infos = response.json()['abslist']
    scores = []
    for i in range(0, 3):
        score = 0
        sid = infos[i]['DC_TARGETID']
        song = get_song_info(sid)
        if 'lrclist' not in song['data']:
            # 没有歌词的，不采用
            score = -1
            scores.append(score)
            continue

        has_lyricist = False
        has_composer = False
        for item in song['data']['lrclist']:
            # 没有词曲的，不采用
            if item['lineLyric'].find('词') != -1:
                has_lyricist = True

            if item['lineLyric'].find('曲') != -1:
                has_composer = True

        if not has_lyricist or not has_composer:
            score = -1
            scores.append(score)
            continue

        # 符合以下条件的歌词，每符合一个条件加分：
        # 1. 歌手名匹配
        # 2. 歌名匹配
        # 3. 网站有MV
        arr1 = artist_name.upper().split('&')
        arr2 = infos[i]['FARTIST'].upper().split('&')
        if sorted(arr1) == sorted(arr2):
            score += 1

        file_song_name = song_name.strip().replace('（', '(').replace('）', ')').upper()
        web_song_name = infos[i]['SONGNAME'].strip().replace('（', '(').replace('）', ')').upper()
        if file_song_name == web_song_name:
            score += 1

        if infos[i]['MVFLAG'] == '1':
            score += 1

        scores.append(score)

    idx = scores.index(max(scores))
    sid = infos[idx]['DC_TARGETID']
    song = get_song_info(sid)
    # 把唱片封面改成700*700（酷我封面的最大值）
    album_cover = f"https://img1.kuwo.cn/star/albumcover/{infos[idx]['web_albumpic_short']}".replace('/120/', '/700/')
    song_infos[song_id] = extract_song(album_cover, song['data']['lrclist'])


if __name__ == "__main__":
    # 繁体转简体的转换器
    cc = opencc.OpenCC('t2s')

    # 读取Excel文件
    file_path = 'template/input/歌单.xlsx'  # 替换为你的Excel文件路径
    df = pd.read_excel(file_path)

    # 提取“歌曲”和“歌手”两列
    selected_columns = df[['歌曲', '歌手']]

    start_tm = time()
    for index, row in selected_columns.iterrows():
        # //-//
        # if index != 1:
        #     continue

        gen_song_infos(index + 2, row['歌曲'], row['歌手'])

    # 如果目标文件夹存在，则先删除它
    src_folder = 'template'
    dst_folder = '.'

    shutil.copytree(src_folder, dst_folder, ignore=shutil.ignore_patterns('*.xlsx', '*.py'), dirs_exist_ok=True)

    cover_cnt = count_cover_back_files('封面')
    back_cnt = count_cover_back_files('封底')

    with open(f'{src_folder}/index.js', 'r', encoding='utf-8') as infile, open(f'{dst_folder}/index.js', 'w', encoding='utf-8') as outfile:
        # 逐行读取模版文件，写入到目标文件
        for line in infile:
            outfile.write(line.replace('{{ LYRICSS }}', str(song_infos))
                          .replace('{{ COUNT_COVER }}', str(cover_cnt))
                          .replace('{{ COUNT_BACK }}', str(back_cnt)))

    dt_object = datetime.fromtimestamp(time())
    print(f'用时：{time() - start_tm}秒')
