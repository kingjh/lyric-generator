const body = document.querySelector('body')
const coverBody = document.querySelector('#coverBody')
const backBody = document.querySelector('#backBody')
const songBody = document.querySelector('#songBody')
const lyricsBody = document.querySelector('#lyricsBody')
const albumCoverDiv = document.querySelector('#albumCover')
const songNameDiv = document.querySelector('#songName')
const lyricistDiv = document.querySelector('#lyricist')
const composerDiv = document.querySelector('#composer')
const lyricsDiv = document.querySelector('#lyricLines')
const bodys = [coverBody, backBody, songBody, lyricsBody]
const COUNT_COVER = 2
const COUNT_BACK = 2
const IDX_BODY_COVER = 0
const IDX_BODY_BACK = 1
const IDX_BODY_SONG = 2
const IDX_BODY_LYRICS = 3
const LYRICSS = {2: {'albumCover': 'https://img1.kuwo.cn/star/albumcover/120/84/12/2395992766.jpg', 'lyrics': ['默认歌手|别望着 那热茶 暗中的 计算', '默认歌手|茶包 浮起 沉淀', '默认歌手|若是没要事 你怎会约我相见', '默认歌手|分手讲到了 咀边', '默认歌手|让静默 去蔓延 救不了你 太多遍', '默认歌手|逃走 还更 方便', '默认歌手|事实上我亦 理解 不忠的辛酸', '默认歌手|不便突然 态度变', '默认歌手|毋须打开天窗', '默认歌手|能装不知 也算体谅', '默认歌手|狠心揭破真相', '默认歌手|无非想 扮诚实来换舒畅', '默认歌手|毋须开多一枪', '默认歌手|即使分手 要有修养', '默认歌手|今天晚宴 就由你付账', '默认歌手|自问亦有形象 未愿暴露惆怅', '默认歌手|我会扮做无人欠我 分开只因我想', '默认歌手|毋须打开天窗', '默认歌手|能装不知 也算体谅', '默认歌手|狠心揭破真相', '默认歌手|无非想 扮诚实来换舒畅', '默认歌手|毋须开多一枪', '默认歌手|即使分手 要有修养', '默认歌手|今天晚宴 就由你付账', '默认歌手|这结局美丽过真相 这结局更善良', '默认歌手|毫无杀气 不必心伤', '默认歌手|毋须打开天窗', '默认歌手|能装不知 也算体谅', '默认歌手|狠心揭破真相', '默认歌手|无非想 扮诚实来换舒畅', '默认歌手|毋须开多一枪', '默认歌手|即使分手 要有修养', '默认歌手|今天晚宴 就由你付账', '默认歌手|不必送我 大门要 关上'], 'songName': '天窗', 'lyricist': '黄伟文', 'composer': '周柏豪'}, 3: {'albumCover': 'https://img1.kuwo.cn/star/albumcover/120/34/22/4193068444.jpg', 'lyrics': ['男|从来亦无自信', '男|人云亦云庸庸碌碌半生', '男|连自己的恋爱运也欠一点决心', '女|为何望来望去仍无下文', '女|明明彼此有同感', '女|难道等一天变做熟人', '女|发现原来相衬', '男|可否冷静看一阵', '女|都有几个人靠近', '合|现在还未说缠绵情节会', '合|逐渐降温', '男|迟来一秒钟迟疑一秒钟', '男|从迎接你变做目送', '女|迟来一秒钟沿途经过和结局', '女|其实太不同', '男|迟迟未预备第一句爱你', '男|已经足够酝酿暗涌', '女|盼望犹豫未决的情人回信', '女|犹如行刑悬在半空', '男|拖一拖', '女|等一等', '合|怕得到得来已是无用', '男|拖一拖', '女|等一等', '合|这刻的感动变做裂缝', '男|良辰就如白费明明动情', '男|怎会不敢作声', '女|提示很充足但你的态度', '女|永远不得要领', '男|相恋要是有天命', '女|都要等你来确认', '合|现在还未说缠绵情节会逐渐结冰', '男|迟来一秒钟迟疑一秒钟', '男|从迎接你变做目送', '女|迟来一秒钟沿途经过和结局', '女|其实太不同', '男|迟迟未预备第一句爱你', '男|已经足够酝酿暗涌', '女|盼望犹豫未决的情人回信', '女|犹如行刑悬在半空', '合|拖一拖', '合|等一等', '合|怕得到得来已是无用', '合|拖一拖等一等', '合|这刻的感动变做裂缝', '合|连提及亦会心痛', '男|相恋要是有天命', '女|都要等你来确认', '女|现在还未说', '男|还未认', '女|缠绵情节会', '合|逐渐结冰', '男|迟来一秒钟迟疑一秒钟', '男|良缘永远这样断送', '女|迟来一秒钟仍然等你来告白', '女|何事你都未动容', '男|明明在附近又不告诉你', '男|太多恋爱这样告终', '女|怕在离场后接到迟来情信', '女|其时和旁人在抱拥', '合|拖一拖等一等', '合|怕这点激情最后和缓', '男|拖一拖', '女|等一等', '合|终于知表白刻不容缓'], 'songName': '刻不容缓', 'lyricist': '黄伟文', 'composer': '伍乐城'}, 4: {'albumCover': 'https://img1.kuwo.cn/star/albumcover/120/50/47/3674915795.jpg', 'lyrics': ['男|我大概未算学懂保护别人', '男|才无名无份以致我们拖拉至今', '男|令你未放心全程做我一世情人', '男|仿佛还未够相衬', '女|大家忙 多么漂亮理由', '男|爱不够 只不过是借口', '女|凭我爱你', '合|这么久', '合|亦没信心走出教堂', '合|没理由', '男|为何未够好', '女|你对过谁好', '男|请听我预告', '女|怎么知道', '男|就算跟你未游尽花都', '男|可给你的都会做到', '女|并未求什么', '女|唯一志愿想你安好', '男|谁能及我好', '女|你有你原因', '男|我也想知道', '女|怎么知道', '男|就算这相貌从未讨好', '女|总可当跟椅垫共老', '男|任地厚天高', '合|回家也都想得到拥抱', '合|除非这感情你不稀罕太易得到', '女|大家忙 多么漂亮理由', '男|爱不够 只不过是借口', '合|凭我爱你这么久', '合|亦没信心走出教堂', '合|没理由', '男|为何未够好', '女|你对过谁好', '男|请听我预告', '女|怎么知道', '男|就算跟你未游尽花都', '男|可给你的都会做到', '女|并未求什么', '女|唯一志愿想你安好', '男|为何未结婚', '女|你有你原因', '男|我也想知道', '女|怎么知道', '男|就算这相貌从未讨好', '女|总可当跟椅垫共老', '男|任地厚天高', '合|回家也都想得到拥抱', '合|除非这感情你不稀罕太易得到', '男|明日若然你要我抱一抱', '男|明日若无没遇见更好', '合|我答应最早来到'], 'songName': '合久必婚 (Live)', 'lyricist': '林夕', 'composer': '伍乐城'}, 5: {'albumCover': 'https://img1.kuwo.cn/star/albumcover/120/83/80/538548261.jpg', 'lyrics': ['默认歌手|专一至今竟会敢避过你的吻', '默认歌手|伏在你身说找到更喜爱的人', '默认歌手|我也居然变心不禁要承认我', '默认歌手|像往日我恨透的罪人', '默认歌手|当初的我为了你围满着好友', '默认歌手|日夜怪你爱不够还惊你风流', '默认歌手|然后到我内疚任旁人来认购', '默认歌手|恨你没有问情由便放我走', '默认歌手|谁都会散怎知一拍便会散', '默认歌手|怪我自己作反明明我不应再拣', '默认歌手|忠贞怎可以贪给抛弃亦已很惯', '默认歌手|不惯去承认自私移情别爱太奸', '默认歌手|迟早要散散得清脆未算惨', '默认歌手|我却要忠变奸斗胆一脚踏两船', '默认歌手|想上岸时又晏无面目再解释', '默认歌手|自费了承诺是否太斗胆', '默认歌手|当初枉我未拍拖曾这样讲过', '默认歌手|外遇那些女主角迟早惹出祸', '默认歌手|谁料那个是我又能如何恨我', '默认歌手|没法面对自我其实最痛楚', '默认歌手|谁都会散怎知一拍便会散', '默认歌手|怪我自己作反明明我不应再拣', '默认歌手|忠贞怎可以贪给抛弃亦已很惯', '默认歌手|不惯去承认自私移情别爱太奸', '默认歌手|迟早都散散得清脆未算惨', '默认歌手|我却要忠变奸斗胆一脚踏两船', '默认歌手|想上岸时又晏无面目再解释', '默认歌手|自费了承诺是否太斗胆', '默认歌手|何苦再自命凄惨你当我捣蛋', '默认歌手|誓要去与他邂逅', '默认歌手|仍然从不怕被人话滥', '默认歌手|从未做过玩家但我却诚实认真去玩', '默认歌手|真心相爱未见得为了他英俊', '默认歌手|换掉角色也许你你都会包容', '默认歌手|我到今天至懂为情而沦落了', '默认歌手|在背后确实有些苦衷不可不信'], 'songName': '一拍两散', 'lyricist': '林夕', 'composer': '方树良'}, 6: {'albumCover': 'https://img1.kuwo.cn/star/albumcover/120/68/7/361514929.jpg', 'lyrics': ['默认歌手|苦苦坚持 经已没意思', '默认歌手|为何不可以', '默认歌手|由我去决定谁', '默认歌手|才应该在我心中拥有位置', '默认歌手|当你下次要玩伴时', '默认歌手|手机按到没电时', '默认歌手|情愿你别来 找这失势女子', '默认歌手|想起当时 蠢也没法子', '默认歌手|纯情得可以', '默认歌手|男生中只得你赠我戒指', '默认歌手|原来就算最爱我不过暂时', '默认歌手|名次每隔两日都改变位置', '默认歌手|一变四 四变十二', '默认歌手|来到这礼拜更加讽刺', '默认歌手|何以 我变了你的十六号爱人', '默认歌手|随便', '默认歌手|碰上那个她都比我更有趣吸引', '默认歌手|偶尔我亦 愿我是别人', '默认歌手|能转个化身共你再蜜运', '默认歌手|我以前是冠军', '默认歌手|怎会惯 做后备爱人', '默认歌手|曾经也上到最高逐渐滑落谷底的暗', '默认歌手|看见未来 双脚已在震', '默认歌手|因我说过爱是无憾 才会受教训', '默认歌手|谦卑的人 只要做亚军', '默认歌手|仍然很兴奋', '默认歌手|谁知吞声忍气就变季军', '默认歌手|谁人话我会纵你勾搭别人', '默认歌手|连跌到四五六七都会默允', '默认歌手|忍了你 你更薄幸', '默认歌手|能叫我跌到永不超生', '默认歌手|何以 我变了你的十六号爱人', '默认歌手|随便', '默认歌手|碰上那个她都比我更有趣吸引', '默认歌手|偶尔我亦 愿我是别人', '默认歌手|能转个化身共你再蜜运', '默认歌手|我以前是冠军', '默认歌手|怎会惯 做后备爱人', '默认歌手|曾经也上到最高逐渐滑落谷底的暗', '默认歌手|看见未来 双脚已在震', '默认歌手|因我说过爱是无憾 才会受教训', '默认歌手|不想再竞逐 你的吻', '默认歌手|我怕赢了惹公愤', '默认歌手|面对几千个 敌军 终日查问', '默认歌手|是谁幸运做你本周冠军', '默认歌手|何以 我变了你的十六号爱人', '默认歌手|随便碰上那个她都比我更美更吸引', '默认歌手|最怕以后位置再下沉', '默认歌手|完结了也好恨也再别恨', '默认歌手|我以前是冠军', '默认歌手|怎会惯 做后备爱人', '默认歌手|曾经也上过冠军现在份外深深不忿', '默认歌手|你那热唇 她吻我又吻', '默认歌手|当你变了这样随便 谁个又要吻'], 'songName': '16号爱人', 'lyricist': '黄伟文', 'composer': '翁玮盈'}, 7: {'albumCover': 'https://img1.kuwo.cn/star/albumcover/120/47/46/866152197.jpg', 'lyrics': ['默认歌手|我曾共你通宵 饮过酒', '默认歌手|亦曾被你熏得满身烟臭', '默认歌手|何时与你成为挚友', '默认歌手|同走过寂时候', '默认歌手|而难与你热恋的对手', '默认歌手|宁愿留下友情', '默认歌手|情份更是永久', '默认歌手|谁更清楚', '默认歌手|清楚你的风流', '默认歌手|缠住你手', '默认歌手|只怕热泪会流', '默认歌手|和你能扮演好友', '默认歌手|男士那般搭膊头', '默认歌手|和你牵手', '默认歌手|只恐怕太荒谬', '默认歌手|还是当你一位损友', '默认歌手|没寄望没强求', '默认歌手|若我离开', '默认歌手|你不曾内疚', '默认歌手|愿能在你失意热情慰问', '默认歌手|未能被你酒后趁机一吻', '默认歌手|谁人与你成为爱侣', '默认歌手|能保证绝无挂虑', '默认歌手|谈情说爱', '默认歌手|何日都可告吹', '默认歌手|宁愿留下友情', '默认歌手|伤心都只可斗咀', '默认歌手|谁更清楚', '默认歌手|清楚你的风流', '默认歌手|缠住你手', '默认歌手|只怕热泪会流', '默认歌手|和你能扮演好友', '默认歌手|男士那般搭膊头', '默认歌手|和你牵手', '默认歌手|只恐怕太荒谬', '默认歌手|还是当你一位损友', '默认歌手|没寄望没强求', '默认歌手|纵使找到新欢', '默认歌手|你也会笑着不内疚', '默认歌手|谁昨晚共你一起', '默认歌手|用情如像游戏', '默认歌手|我没福气去责备你', '默认歌手|无谓揭露谁在妒忌', '默认歌手|就怪我太清楚', '默认歌手|清楚你的风流', '默认歌手|明白你 一世亦贪新厌旧', '默认歌手|我宁愿当好友', '默认歌手|无愁无虑地碰头', '默认歌手|和你牵手', '默认歌手|只恐怕太荒谬', '默认歌手|还是当最忠心损友', '默认歌手|没寄望没强求', '默认歌手|若我离开', '默认歌手|你不曾内疚', '默认歌手|是友情 没强求', '默认歌手|永开不到口', '默认歌手|爱恋有没有'], 'songName': '损友', 'lyricist': '李峻一', 'composer': '伍仲衡'}, 8: {'albumCover': 'https://img1.kuwo.cn/star/albumcover/120/31/52/2740945002.jpg', 'lyrics': ['默认歌手|不拖手 或者都可堪称热恋', '默认歌手|一拖手 比咳嗽更短', '默认歌手|太快了 我未快乐过已失恋', '默认歌手|想不起 被爱是如何温暖', '默认歌手|想不通 未够资格使你心软', '默认歌手|但也知道心会这么酸', '默认歌手|理所当然我的错 令你忽然离开', '默认歌手|半路留下我', '默认歌手|为何这么快看清楚 落得这结果', '默认歌手|知我是个 无法讨好的人', '默认歌手|相恋一刻 只是我的侥幸', '默认歌手|然而回头 诚实去自问', '默认歌手|我可讨厌到 如此乞你憎', '默认歌手|知我连眼泪 也绝不感人', '默认歌手|只知怎么考验 你的操行', '默认歌手|从前为何 缠在你附近', '默认歌手|你不寂寞 便嫌我笨', '默认歌手|难道我未够好 未懂得热吻', '默认歌手|足够令你怜悯 勾不起你的兴奋', '默认歌手|不担心 自尊心这么受损', '默认歌手|只担心 我将我看穿', '默认歌手|我怕我 以后太习惯了失恋', '默认歌手|理所当然我的错 令你忽然离开', '默认歌手|也是我错么', '默认歌手|为何这么快看清楚 落得这结果', '默认歌手|知我是个 无法讨好的人', '默认歌手|相恋一刻 只是我的侥幸', '默认歌手|然而回头 诚实去自问', '默认歌手|我可讨厌到 如此乞你憎', '默认歌手|知我连眼泪 也绝不感人', '默认歌手|只知怎么考验 你的操行', '默认歌手|从前为何 缠在你附近', '默认歌手|更加速发觉 原本都不相衬', '默认歌手|我未够吸引 你未够狠', '默认歌手|知我是个 无法讨好的人', '默认歌手|相恋一刻 只是我的侥幸', '默认歌手|然而回头 诚实去自问', '默认歌手|我可讨厌到 如此乞你憎', '默认歌手|知我连眼泪 也绝不感人', '默认歌手|只知怎么考验 你的操行', '默认歌手|从前为何 缠在你附近', '默认歌手|到底这个故事 有没有发生', '默认歌手|何必受罪 心即使碎一碎', '默认歌手|我仍能 继续追', '默认歌手|愿那一刻共聚 懂得怎去相爱', '默认歌手|爱人难 我肯学 定能爱下去'], 'songName': '习惯失恋', 'lyricist': '林夕', 'composer': '舒文'}, 9: {'albumCover': 'https://img1.kuwo.cn/star/albumcover/120/31/0/2410398408.jpg', 'lyrics': ['默认歌手|儿时常梦想', '默认歌手|好好去做社会栋梁', '默认歌手|强人才得奖', '默认歌手|哭泣算什么卖相', '默认歌手|曾如何受伤', '默认歌手|都可以像钢一样强 请拍掌', '默认歌手|然而谁知你', '默认歌手|只偏爱 柔软羔羊', '默认歌手|做人独立什么好', '默认歌手|未能撒野 惹一点不轨企图', '默认歌手|未像睡宝宝 倒于你怀抱', '默认歌手|我气力太好', '默认歌手|难道未诈滥用眼泪去摆姿态', '默认歌手|你便当我是个男孩', '默认歌手|跟我逐寸逐寸地逛的街', '默认歌手|你竟当跟神父告解', '默认歌手|从来未借用你伴侣的姿态', '默认歌手|挟持你去浪漫游街', '默认歌手|若你未够愉快', '默认歌手|让我用眼泪借力去讲', '默认歌手|越来越爱你 爽不爽快', '默认歌手|从前曾幻想', '默认歌手|天天向上勇敢自强 可中奖', '默认歌手|然而谁知道', '默认歌手|一想你 忘记坚强', '默认歌手|做人独立什么好', '默认歌手|未能撒野 惹一点不轨企图', '默认歌手|未像睡宝宝 倒于你怀抱', '默认歌手|我气力太好', '默认歌手|难道未诈滥用眼泪去摆姿态', '默认歌手|你便当我是个男孩', '默认歌手|跟我逐寸逐寸地逛的街', '默认歌手|你竟当跟神父告解', '默认歌手|从来未借用你伴侣的姿态', '默认歌手|挟持你去浪漫游街', '默认歌手|若你未够愉快', '默认歌手|让我用眼泪借力去讲', '默认歌手|越来越爱你 爽不爽快', '默认歌手|难道未诈滥用眼泪去摆姿态', '默认歌手|你便当我是个男孩', '默认歌手|跟我逐寸逐寸地逛的街', '默认歌手|你竟当跟神父告解', '默认歌手|从来未借用你伴侣的姿态', '默认歌手|挟持你去浪漫游街', '默认歌手|若你未够愉快', '默认歌手|让我用眼泪借力去讲', '默认歌手|越来越爱你 爽不爽快'], 'songName': '告解', 'lyricist': '林夕', 'composer': '谢霆锋'}, 10: {'albumCover': 'https://img1.kuwo.cn/star/albumcover/120/95/17/1070241277.jpg', 'lyrics': ['默认歌手|再见 我的初恋跟你一起也不枉', '默认歌手|未曾乘风出海怎破浪', '默认歌手|过去 每幅风景请你随时拿着看', '默认歌手|别忘记你我要继续盛放', '默认歌手|为了有太多青春', '默认歌手|才日夜换期望', '默认歌手|用有限宝贵时光换无限神往', '默认歌手|曾为你神往 亦要落堂', '默认歌手|明年就约在旗杆快到先等', '默认歌手|温情十秒内重头热身', '默认歌手|但领会更深 而眼界更大', '默认歌手|愿我们各有玩伴同行', '默认歌手|明年就约定谁先碰上知心', '默认歌手|讲明别妒忌怀恨在心', '默认歌手|用更亮笑声 留更美印象', '默认歌手|为你朋友庆幸', '默认歌手|再见 你会张开双眼如蔷薇盛放', '默认歌手|但愿你我会更动人耐看', '默认歌手|再见 我的初恋跟你一起也不枉', '默认歌手|二人曾经一起出过汗', '默认歌手|你我 这刻即影即有留来明日看', '默认歌手|别忘记你我那二人便当', '默认歌手|为了有太多青春', '默认歌手|才日夜换期望', '默认歌手|用有限宝贵时光换无限神往', '默认歌手|曾为你神往 亦要落堂', '默认歌手|明年就约在旗杆快到先等', '默认歌手|温情十秒内重头热身', '默认歌手|但领会更深 而眼界更大', '默认歌手|愿我们各有玩伴同行', '默认歌手|明年就约定谁先碰上知心', '默认歌手|讲明别妒忌怀恨在心', '默认歌手|用更亮笑声 留更美印象', '默认歌手|为你朋友庆幸', '默认歌手|若你 太爱以前的印象', '默认歌手|望着二人一幅相', '默认歌手|愿你 会叫这个我更漂亮', '默认歌手|再见 我的初恋跟你一起也不枉', '默认歌手|未曾乘风出海怎破浪', '默认歌手|你我太多青春可以留来明日看', '默认歌手|但微笑要带眼泪才耐看'], 'songName': '再见我的初恋', 'lyricist': '林夕', 'composer': '陈辉阳'}, 11: {'albumCover': 'https://img1.kuwo.cn/star/albumcover/120/0/47/1731294405.jpg', 'lyrics': ['默认歌手|当初肤浅', '默认歌手|得你恩宠似升仙 天有眼', '默认歌手|当真糊涂', '默认歌手|未曾发觉我该俯瞰南极快没有冰山', '默认歌手|当初专心 跟你烛光晚餐', '默认歌手|从没有认识蜡烛怎样消散', '默认歌手|当你的光环', '默认歌手|暗过世间火柴', '默认歌手|何用困在五指山', '默认歌手|而神迹失灵才知天大地大转得快', '默认歌手|梦幻的生涯无非拖手逛街', '默认歌手|怪得谁 要敬拜你', '默认歌手|便没视力静观世态', '默认歌手|忘掉谁是你', '默认歌手|记住我亦有自己见地', '默认歌手|无论你几高', '默认歌手|身价亦低过青花瓷器', '默认歌手|评核我自己', '默认歌手|只顾投资于爱情', '默认歌手|困在你小宇宙损失对大世界的好奇', '默认歌手|回味谁是你', '默认歌手|往日有什么品味', '默认歌手|只要敢远飞', '默认歌手|亦能自创我的搜神记', '默认歌手|磨练我自己', '默认歌手|做人目光高过聚散分离', '默认歌手|就凭你', '默认歌手|相爱大不了提升演技当做戏', '默认歌手|从前只懂情人的感动力量最珍贵', '默认歌手|未洞悉小巷大街遍地华丽', '默认歌手|昂起头 看遍世界', '默认歌手|我也会有我的气势 喔', '默认歌手|忘掉谁是你', '默认歌手|记住我亦有自己见地', '默认歌手|无论你几高', '默认歌手|身价亦低过青花瓷器', '默认歌手|评核我自己', '默认歌手|只顾投资于爱情', '默认歌手|困在你小宇宙损失对大世界的好奇', '默认歌手|回味谁是你', '默认歌手|往日有什么品味', '默认歌手|只要敢远飞', '默认歌手|亦能自创我的搜神记', '默认歌手|磨练我自己', '默认歌手|做人目光高过聚散分离', '默认歌手|就凭你', '默认歌手|相爱大不了提升演技当做戏', '默认歌手|抛开你先识去审美', '默认歌手|往后我便有自己见地', '默认歌手|无论爱几高', '默认歌手|身价亦低过青花瓷器', '默认歌手|评核我自己', '默认歌手|只顾投资于爱情', '默认歌手|困在你小宇宙损失看大世界的福气', '默认歌手|回味谁是你', '默认歌手|往日有什么品味', '默认歌手|只要敢远飞', '默认歌手|亦能自创我的烟花纪', '默认歌手|神是我自己', '默认歌手|若然目光高过聚散分离', '默认歌手|奉承你', '默认歌手|因往日双眼无珠不停放大你', '默认歌手|想快乐不靠神迹才懂创世纪'], 'songName': '搜神记', 'lyricist': '林夕', 'composer': 'Christopher Chak'}, 12: {'albumCover': 'https://img1.kuwo.cn/star/albumcover/120/95/17/1070241277.jpg', 'lyrics': ['默认歌手|很想要求你会三更半夜陪着我', '默认歌手|然而我怕', '默认歌手|我的声音你已听得太多', '默认歌手|怎么可能要你每次开心快乐全为我', '默认歌手|还怪你 你跟知己也见得比我多', '默认歌手|期待你的花会开', '默认歌手|其实自己也都讨厌期待', '默认歌手|恐怕正式真实恋爱', '默认歌手|痛恨明日也许分开', '默认歌手|这么不知所谓怎么爱', '默认歌手|为何还没有初吻便要怕失恋', '默认歌手|约会未完便挂念', '默认歌手|傻得我晚上过分期求明天', '默认歌手|以为你会在眼前', '默认歌手|为何还没有吵架', '默认歌手|便怕与你开战', '默认歌手|每日面临你考验', '默认歌手|头一次顾虑我没动人条件', '默认歌手|怀疑全是我问题', '默认歌手|没发现', '默认歌手|明知单恋惊险', '默认歌手|但我还未脱险', '默认歌手|如果初恋肤浅', '默认歌手|怎么我会兴奋狂热', '默认歌手|但却又什么都怯', '默认歌手|天天失眠我怕消失气力缠着你', '默认歌手|然而据说爱得精彩别要贪生怕死', '默认歌手|怎么可能爱你爱到将我自己捐给你', '默认歌手|还怕你会将感激变成对不起', '默认歌手|为何还没有初吻便要怕失恋', '默认歌手|约会未完便挂念', '默认歌手|傻得我晚上过分期求明天', '默认歌手|以为你会在眼前', '默认歌手|为何还没有吵架', '默认歌手|便要与你开战', '默认歌手|每日面临你考验', '默认歌手|还担心我没气力去到终点', '默认歌手|还听讲过分了解没发展', '默认歌手|明知单恋惊险', '默认歌手|但我还未脱险', '默认歌手|如果初恋肤浅', '默认歌手|怎么我会兴奋狂热', '默认歌手|但却又什么都怯', '默认歌手|明知单恋惊险', '默认歌手|但我还未脱险', '默认歌手|如果初恋肤浅', '默认歌手|怎么我会兴奋狂热', '默认歌手|什么都想 什么都怯'], 'songName': '怯', 'lyricist': '林夕', 'composer': '陈辉阳'}, 13: {'albumCover': 'https://img1.kuwo.cn/star/albumcover/120/27/77/3397514877.jpg', 'lyrics': ['默认歌手|开首的一篇是某某出生', '默认歌手|妈妈给宝宝奉上这一生头一吻', '默认歌手|开端之后或晴或暗', '默认歌手|怎么走就像连续剧也欠缺安稳', '默认歌手|或者 于某集我可抬头欣赏到你', '默认歌手|或者 一转念便要失去你', '默认歌手|或者 转折渐太多 遗忘怎拥抱你', '默认歌手|或者 拥紧偏已断气', '默认歌手|情人们一呼一吸相爱到底 ', '默认歌手|结局或同样', '默认歌手|仍想将你我这幕 演得更理想', '默认歌手|能修补即管修补 不要再想', '默认歌手|再一刻人便缺氧', '默认歌手|熟悉的歌曲 等与你合唱', '默认歌手|新一章怎可是你我分开', '默认歌手|可否改写得像你我当初还相爱', '默认歌手|只可惜上集难逆转 ', '默认歌手|伤感的下集仍然未播', '默认歌手|我会修改', '默认歌手|如果 当晚没有分神来紧张布置', '默认歌手|如果 不必误会再猜疑', '默认歌手|如果 将对白说得平和 不加讽刺', '默认歌手|如果 真的可有下次', '默认歌手|情人们一呼一吸相爱到底 ', '默认歌手|结局或同样', '默认歌手|仍然能拖紧彼此 走绝地雪霜', '默认歌手|如能重修好一双 不要再想', '默认歌手|再一刻人便缺氧', '默认歌手|明知可一起 不要再独唱', '默认歌手|情人们一呼一吸相爱到底 ', '默认歌手|结局或同样', '默认歌手|仍想将你我这幕 演得更理想', '默认歌手|如能重修好一双', '默认歌手|不要再想 再一刻谁亦要退下场', '默认歌手|多得你在场 多得我在场', '默认歌手|天空也在场 演好这一章', '默认歌手|呼吸太无常'], 'songName': '连续剧', 'lyricist': '林日曦', 'composer': '邓智伟'}, 14: {'albumCover': 'https://img1.kuwo.cn/star/albumcover/120/48/4/233694331.jpg', 'lyrics': ['默认歌手|耿耿于上次太绝情', '默认歌手|残留全是冷漠布景', '默认歌手|纠结故事极难忘', '默认歌手|难忘爱你但我没承认', '默认歌手|都只因上次太忘形', '默认歌手|谁人才重要未看清', '默认歌手|应有对白被遗忘', '默认歌手|遗忘半句道歉没说清', '默认歌手|若是幸运地展开续集', '默认歌手|让我学会把握', '默认歌手|日夜背诵陌生的独白', '默认歌手|让态度也掌握', '默认歌手|只要可跟你再遇见', '默认歌手|伤过的会珍惜每刻', '默认歌手|从头开始 ', '默认歌手|多多一次靠你我来重演', '默认歌手|多多一集上集就如排练', '默认歌手|就让剧情缓缓改变', '默认歌手|从头饰演', '默认歌手|饰演一个更信爱情人选', '默认歌手|相恋之道上集未能完善', '默认歌手|耗尽热情重来一遍', '默认歌手|仍然是我 或会倔强一点', '默认歌手|但未会想 像上回被讨厌', '默认歌手|只想这一次愉快 能成为最主线', '默认歌手|当呼吸是照旧无常', '默认歌手|前行仍旧遍地雪霜', '默认歌手|当四季尚在场时', '默认歌手|能怀抱你是最大理想', '默认歌手|现实是混乱间分别后', '默认歌手|没有力气再走', '默认歌手|现实是日夜只懂念旧', '默认歌手|没有办法放手', '默认歌手|只妄想跟你去避世', '默认歌手|风再急可捉紧你手', '默认歌手|从头开始', '默认歌手|多多一次靠你我来重演', '默认歌手|多多一集上集就如排练', '默认歌手|就让剧情缓缓改变', '默认歌手|从头饰演', '默认歌手|饰演一个更信爱情人选', '默认歌手|相恋之道上集未能完善', '默认歌手|耗尽热情重来一遍', '默认歌手|仍然是我 或会倔强一点', '默认歌手|但未会想 像上回被讨厌', '默认歌手|只想这一次和你 能同行到终点', '默认歌手|忘记危殆画面 第二次学脱险', '默认歌手|趁机可清理太多缺失太多的亏欠', '默认歌手|忘记暴雨画面 第二次望向天', '默认歌手|总可雨过晴天', '默认歌手|何时开始', '默认歌手|多多一次看你我如何演', '默认歌手|多多一部续集用来如愿', '默认歌手|命运或能完全改变', '默认歌手|然而现况 是各自各一边', '默认歌手|但愿有天 会真的跟你结识', '默认歌手|暗恋热恋多一遍', '默认歌手|期盼来到这天 遗憾桥段可变', '默认歌手|时间场地改变 唯独人物不变'], 'songName': '续集', 'lyricist': '林日曦', 'composer': '邓智伟'}, 15: {'albumCover': 'https://img1.kuwo.cn/star/albumcover/120/83/80/538548261.jpg', 'lyrics': ['默认歌手|看看你 谁人可比你好', '默认歌手|好得这么恐怖', '默认歌手|真的不知所措', '默认歌手|连前度那伤口', '默认歌手|也细致的问到', '默认歌手|痛到那种程度', '默认歌手|迟一些可会好', '默认歌手|还提及上次恋爱', '默认歌手|预算与我终老', '默认歌手|现在和她一起', '默认歌手|也想起我的好', '默认歌手|伤我或是害我都惨不过', '默认歌手|教我记得一起幸福过', '默认歌手|情愿我听不清楚', '默认歌手|当时谁人口口声声不会掉低我', '默认歌手|待我差我没有奈何', '默认歌手|为何扮好心慰问很挂念我么', '默认歌手|还能成为密友么', '默认歌手|你说得真轻松', '默认歌手|讲笑也 别太过', '默认歌手|你忏悔 无人可比我好', '默认歌手|今天终于知道', '默认歌手|不该知恩不报', '默认歌手|还情愿你不知', '默认歌手|你错到一面倒', '默认歌手|我会更加容易', '默认歌手|拿开拐杖企好', '默认歌手|为何又共我讲到', '默认歌手|念挂我那拥抱', '默认歌手|豺狼诚心祷告', '默认歌手|难道并没企图', '默认歌手|伤我或是害我都惨不过', '默认歌手|教我记得一起幸福过', '默认歌手|情愿我听不清楚', '默认歌手|当时谁人口口声声不会掉低我', '默认歌手|待我差我没有奈何', '默认歌手|为何扮好心慰问', '默认歌手|很挂念我么', '默认歌手|还能成为密友么', '默认歌手|你说得真轻松', '默认歌手|不爱我 别拉拖', '默认歌手|是对我好就请躲开', '默认歌手|求你让我安静行过', '默认歌手|因你犯下大错都惨不过', '默认歌手|教我记得彼此热恋过', '默认歌手|情愿我听不清楚', '默认歌手|当时谁人口口声声不会掉低我', '默认歌手|我到底可像太傻', '默认歌手|为何扮好心慰问很挂念我么', '默认歌手|还能成为密友么', '默认歌手|你说得可天真', '默认歌手|不爱我 就借过'], 'songName': '借过', 'lyricist': '黄伟文', 'composer': '黄丹仪'}, 16: {'albumCover': 'https://img1.kuwo.cn/star/albumcover/120/31/52/2740945002.jpg', 'lyrics': ['默认歌手|想不起 怎么会病到不分好歹', '默认歌手|连受苦都甜美', '默认歌手|我每日挨着 不睬不理', '默认歌手|但却挨不死', '默认歌手|又去痴缠你', '默认歌手|难道终此一生 都要这么', '默认歌手|不可争一口气', '默认歌手|很谦卑 只不过是我太过爱你', '默认歌手|连自尊都忘记', '默认歌手|跌到极麻木 只好相信', '默认歌手|又再爬得起', '默认歌手|就会有转机', '默认歌手|若我不懂憎你 如何离别你', '默认歌手|亦怕不会飞', '默认歌手|由这一分钟开始计起', '默认歌手|春风秋雨间', '默认歌手|限我对你以半年时间', '默认歌手|慢慢的心淡', '默认歌手|付清 账单', '默认歌手|平静的对你热度退减', '默认歌手|一天一点伤心过', '默认歌手|这一百数十晚', '默认歌手|大概也够我', '默认歌手|送我来回地狱又折返人间', '默认歌手|春天分手 秋天会习惯', '默认歌手|苦冲开了便淡', '默认歌手|很谦卑 只不过是我太过爱你', '默认歌手|连自尊都忘记', '默认歌手|跌到极麻木 只好相信', '默认歌手|又再爬得起', '默认歌手|就会有转机', '默认歌手|若我不懂憎你 如何离别你', '默认歌手|亦怕不会飞', '默认歌手|由这一分钟开始计起', '默认歌手|春风秋雨间', '默认歌手|限我对你以半年时间', '默认歌手|慢慢的心淡', '默认歌手|付清 账单', '默认歌手|平静的对你热度退减', '默认歌手|一天一点伤心过', '默认歌手|这一百数十晚', '默认歌手|大概也够我', '默认歌手|送我来回地狱又折返人间', '默认歌手|春天分手 秋天会习惯', '默认歌手|苦冲开了便淡', '默认歌手|说什么再平反', '默认歌手|只怕被迫一起 更碍眼', '默认歌手|往后这半年间', '默认歌手|只爱自己 虽说不太习惯', '默认歌手|毕竟有限 就当 过关', '默认歌手|由这一分钟开始计起', '默认歌手|春风秋雨间', '默认歌手|限我对你以半年时间', '默认歌手|慢慢的心淡', '默认歌手|付清 账单', '默认歌手|平静的对你热度退减', '默认歌手|一天一点伤心过', '默认歌手|这一百数十晚', '默认歌手|大概也够我', '默认歌手|送我来回地狱又折返人间', '默认歌手|春天分手 秋天会习惯', '默认歌手|苦冲开了便淡'], 'songName': '心淡', 'lyricist': '黄伟文', 'composer': '徐继宗'}, 17: {'albumCover': 'https://img1.kuwo.cn/star/albumcover/120/50/68/3048447927.jpg', 'lyrics': ['默认歌手|窗纱外小鹿给我送枝花', '默认歌手|梳化上下凡天使共我喝着茶', '默认歌手|世间千千万万人未明白我', '默认歌手|替这位空想家惊讶', '默认歌手|孤单真的不可怕能让我画满花', '默认歌手|还未算是那么差', '默认歌手|让那恐龙成群行过台面', '默认歌手|衣柜入面藏着花园', '默认歌手|心仪男孩长驻于身边', '默认歌手|梦要变真也没那样远', '默认歌手|生命从未如乐园', '默认歌手|也可靠我创做浮现', '默认歌手|让那彩虹长桥无限伸展', '默认歌手|飞象日日云上表演', '默认歌手|魔幻现实寻到相交点', '默认歌手|在我心房的黄色门里', '默认歌手|保存着未坐那火箭', '默认歌手|天花上星星眨眼变烟花', '默认歌手|口袋内是前一晚摘了那月牙', '默认歌手|我编绘的让别人视为幻觉', '默认歌手|我早知因此不惊诧', '默认歌手|今天虽则长高了墙上继续挂的', '默认歌手|还是我六岁的画', '默认歌手|让那恐龙成群行过台面', '默认歌手|衣柜入面藏着花园', '默认歌手|心仪男孩长驻于身边', '默认歌手|梦要变真也没那样远', '默认歌手|生命从未如乐园', '默认歌手|也可靠我创做浮现', '默认歌手|让那彩虹长桥无限伸展', '默认歌手|飞象日日云上表演', '默认歌手|魔幻现实寻到相交点', '默认歌手|在我心房的黄色门里', '默认歌手|保存着未坐那火箭', '默认歌手|让那海豚时时游到趾尖', '默认歌手|不由旁人沉闷伤损', '默认歌手|一人同行行进卡通片', '默认歌手|在我坚持的黄色门里', '默认歌手|珍藏着自制那冠冕', '默认歌手|窗纱外小鹿给我送支花', '默认歌手|想想吧真想给你见到他'], 'songName': '黄色大门', 'lyricist': '黄伟文', 'composer': '王双骏'}, 18: {'albumCover': 'https://img1.kuwo.cn/star/albumcover/120/50/68/3048447927.jpg', 'lyrics': ['默认歌手|谁明白我想\u3000想一觉熟睡', '默认歌手|谁料我竟\u3000参加这派对', '默认歌手|期待你陪着我不登对都有趣', '默认歌手|就趁你快乐问你喜欢谁', '默认歌手|你却说是否指恋爱伴侣', '默认歌手|若是那种\u3000自问怕累', '默认歌手|然后我咬着唇勒住眼泪', '默认歌手|如若我肯\u3000抚心去自问', '默认歌手|其实我想\u3000得到你一吻', '默认歌手|然后你承认我\u3000我是谁的候任', '默认歌手|就算我已鉴定你非好人', '默认歌手|也至少换得到一个烙印', '默认歌手|但是我想\u3000并没有问', '默认歌手|其实你这坏人\u3000从来未为女生虔诚认真', '默认歌手|我爱你这秘密谁愿意去证实', '默认歌手|得到这忧郁症也不委屈', '默认歌手|将灯光关上后便放心怀念你', '默认歌手|只可惜只够力啜泣', '默认歌手|我对你再老实难令你变老实', '默认歌手|单恋者都可以勇敢呼吸', '默认歌手|趁你我还未消失', '默认歌手|宁愿别公开秘密', '默认歌手|直到末日', '默认歌手|如若我肯\u3000抚心去自问', '默认歌手|其实我想\u3000得到你一吻', '默认歌手|然后你承认我\u3000我是谁的候任', '默认歌手|就算我已鉴定你非好人', '默认歌手|也至少换得到一个烙印', '默认歌手|但是我想\u3000并没有问', '默认歌手|其实你这坏人\u3000从来未为女生虔诚认真', '默认歌手|我爱你这秘密谁愿意去证实', '默认歌手|得到这忧郁症也不委屈', '默认歌手|将灯光关上后便放心怀念你', '默认歌手|只可惜只够力啜泣', '默认歌手|我对你再老实难令你变老实', '默认歌手|单恋者都可以勇敢呼吸', '默认歌手|趁你我还未消失', '默认歌手|宁愿别公开秘密', '默认歌手|直到末日', '默认歌手|我爱你这秘密谁愿意去证实', '默认歌手|得到这忧郁症也不委屈', '默认歌手|将灯光关上后便放心怀念你', '默认歌手|只可惜只够力啜泣', '默认歌手|我对你再老实难令你变老实', '默认歌手|单恋者都可以勇敢呼吸', '默认歌手|趁你我还未消失', '默认歌手|明日就公开秘密', '默认歌手|直到末日', '默认歌手|其实我想\u3000躲于你附近', '默认歌手|其实我想\u3000赌赌我命运', '默认歌手|然后我想'], 'songName': '啜泣', 'lyricist': '林夕', 'composer': '舒文'}, 19: {'albumCover': 'https://img1.kuwo.cn/star/albumcover/120/68/7/361514929.jpg', 'lyrics': ['默认歌手|你怎么会陪着我', '默认歌手|被你跑车再挟持我', '默认歌手|心跳逐秒逐秒掠过', '默认歌手|竟想到最初', '默认歌手|我也差半点认错', '默认歌手|没有分手开车接我', '默认歌手|可笑是我们忘了你们座驾', '默认歌手|不应再轻率给我坐', '默认歌手|游遍了天下前路的风景', '默认歌手|盖着了烟霞', '默认歌手|蒙闭的双眼', '默认歌手|未明白拈上你是何代价', '默认歌手|彼此亦另有他', '默认歌手|神秘的烟霞谁认清真假', '默认歌手|你别要用我受不住的鼻音', '默认歌手|跟我说话', '默认歌手|令我的心软化', '默认歌手|证实我真心想有火花', '默认歌手|难道我别无异心完全没好感', '默认歌手|都可以跟你散心装作假天真', '默认歌手|当我伴侣为我等我便会憎', '默认歌手|憎多心的我太懂累人', '默认歌手|难怪我越来越憎', '默认歌手|遗忘自尊心因一个放下良心', '默认歌手|三个也伤心', '默认歌手|假设若有人求婚', '默认歌手|我亦要等', '默认歌手|等亲多一次你体温', '默认歌手|若你敢挨到极近', '默认歌手|原谅我不敢去忍', '默认歌手|有几多苦恼也自甘', '默认歌手|前度要再为难我', '默认歌手|难度我受不起这个热吻', '默认歌手|游遍了天下前路的风景', '默认歌手|盖着了烟霞', '默认歌手|蒙闭的双眼', '默认歌手|未明白拈上你是何代价', '默认歌手|彼此亦另有他', '默认歌手|神秘的烟霞谁认清真假', '默认歌手|你别要用我受不住的鼻音', '默认歌手|跟我说话', '默认歌手|令我的心软化', '默认歌手|证实我真心想有火花', '默认歌手|难道我别无异心完全没好感', '默认歌手|都可以跟你散心装作假天真', '默认歌手|当我伴侣为我等我便会憎', '默认歌手|憎多心的我太懂累人', '默认歌手|难怪我越来越憎', '默认歌手|遗忘自尊心', '默认歌手|因一个放下良心', '默认歌手|三个也伤心', '默认歌手|假设若有人求婚', '默认歌手|我亦要等', '默认歌手|等亲多一次你体温', '默认歌手|若你敢挨到极近', '默认歌手|原谅我不敢去忍', '默认歌手|有几多苦恼也自甘', '默认歌手|前度要再为难我', '默认歌手|难度我受不起这个热吻', '默认歌手|若你仍然明白我', '默认歌手|让你的车快放下我', '默认歌手|因我是这样傻', '默认歌手|回忆比爱恋多'], 'songName': '烟霞', 'lyricist': '林夕', 'composer': '曾家玮'}, 20: {'albumCover': 'https://img1.kuwo.cn/star/albumcover/120/70/50/1433138476.jpg', 'lyrics': ['默认歌手|刚刚开始彼此那种决心', '默认歌手|明明悬崖都肯一起俯瞰', '默认歌手|人人问起我的男生', '默认歌手|人人亦都妒忌这么衬', '默认歌手|可惜今天彼此抱得再紧', '默认歌手|仍然难逃将关系来划分', '默认歌手|同谐白发美丽的谣传失了真', '默认歌手|才无奈接受你是个完美缺陷', '默认歌手|要发生 始终发生', '默认歌手|并未能像个童话', '默认歌手|于八十岁给你入厨做甜品', '默认歌手|无情是我再和你 如何美满恩爱', '默认歌手|分手一刹却毫无原因', '默认歌手|明白我再流连也是总不配', '默认歌手|是两种命 是两种人', '默认歌手|当决意放手不忿是不忿', '默认歌手|如何逆转 害人缘份', '默认歌手|无奈有爱无缘情人总吸引', '默认歌手|越带希望 越见伤神', '默认歌手|尤其是双方的差距如此近', '默认歌手|但你的吻 最后只可吻别人', '默认歌手|应该怎么抛开你这个人', '默认歌手|从前曾投资生命和耐心', '默认歌手|如何目送这段感情由浅到深', '默认歌手|难行入最后半步我们欠了运', '默认歌手|要转身 只好转身', '默认歌手|道别还未算残忍', '默认歌手|很努力也总要别离便残忍', '默认歌手|难逃避 碰上谁也 仍然与你比较', '默认歌手|只可给予这人同情分', '默认歌手|明白我再流连也是总不配', '默认歌手|是两种命 是两种人', '默认歌手|当决意放手不忿是不忿', '默认歌手|如何逆转 害人缘份', '默认歌手|无奈有爱无缘情人总吸引', '默认歌手|越带希望 越见伤神', '默认歌手|尤其是今天跟所有人拥吻', '默认歌手|没你的吻 那样迫真 动魄惊心', '默认歌手|明白我再流连也是总不配', '默认歌手|没这种运 做对新人', '默认歌手|差半寸也许跟教堂很近', '默认歌手|人行越近 越无缘份', '默认歌手|无奈有爱无缘情人总吸引', '默认歌手|是最宿命 又最感人', '默认歌手|尤其是你共我的确如此衬', '默认歌手|但我只配 注定今生 爱别人'], 'songName': '不配', 'lyricist': '林若宁', 'composer': '黄兆铭'}, 21: {'albumCover': 'https://img1.kuwo.cn/star/albumcover/120/60/99/2460874447.jpg', 'lyrics': ['默认歌手|分一次手 你大伤元气 病两世纪', '默认歌手|已经细的 越见卑微', '默认歌手|他的五官 也并不完美', '默认歌手|提前到末期 绝非因你 下错棋', '默认歌手|曾多么 爱亦会腻', '默认歌手|谁的心 似随意肌', '默认歌手|情人 不爱你 还 不爱你', '默认歌手|凭什么 否定你', '默认歌手|月光 有人捞起 有人瞧不起', '默认歌手|被爱概率 如宇宙 阴森诡秘', '默认歌手|神也摸不透的', '默认歌手|问你怎么与它 斗气', '默认歌手|倾心变心 有什么定理', '默认歌手|缠绵有效期 谁都不似 别去比', '默认歌手|谁失恋 要受责备', '默认歌手|何必将 责任背起', '默认歌手|情人 不爱你 还 不爱你', '默认歌手|凭什么 否定你', '默认歌手|月光 有人捞起 有人瞧不起', '默认歌手|被爱概率 如宇宙 阴森诡秘', '默认歌手|无法主宰那些', '默认歌手|谁那么蠢与它 斗气', '默认歌手|离离合合 百世纪', '默认歌手|段段看破 无常理', '默认歌手|不必 呕心沥血 叫他爱你', '默认歌手|有人是独个 离场才完美', '默认歌手|无人生哲理 能急救你', '默认歌手|唯独这歌 赠你', '默认歌手|幸福 既然随机 你为何心死', '默认歌手|大脑细胞 调校着 恋之分泌', '默认歌手|无法阻他变心', '默认歌手|仍有胸襟永不 泄气'], 'songName': '心之科学', 'lyricist': '黄伟文', 'composer': 'Howie@DearJane/林家谦'}, 22: {'albumCover': 'https://img1.kuwo.cn/star/albumcover/120/29/10/1571708726.jpg', 'lyrics': ['默认歌手|花了它', '默认歌手|手边经已没储蓄吧', '默认歌手|勒停吧', '默认歌手|仙境可以逝似烟霞', '默认歌手|我又怕', '默认歌手|下次换了年号 路边不再有花', '默认歌手|省了它', '默认歌手|担心经济 下秒更差', '默认歌手|讲好一起看奥运', '默认歌手|都怕有突发 坏事件 搁误着韶华', '默认歌手|快乐 会不会重来', '默认歌手|这刻你再忍一下 怎会毫无代价', '默认歌手|明年保了寿命 谁说一定', '默认歌手|有伴侣与东京', '默认歌手|明年即使有热血 初樱初雪', '默认歌手|又如何约定', '默认歌手|趁一切 都正好', '默认歌手|撮合无尽 的偶然来尽兴', '默认歌手|随意浪费着美景 才是对它不敬', '默认歌手|好与差 都只不过是个巧合', '默认歌手|一转侧 这种天国 或已再不', '默认歌手|几生修到有这日 不把握 会消失', '默认歌手|有没有锦绣前程 应否扫这刻的兴', '默认歌手|听我重头辩证', '默认歌手|明年保了寿命 谁说一定', '默认歌手|有伴侣与东京', '默认歌手|明年即使有热血 初樱初雪', '默认歌手|又如何约定', '默认歌手|趁一切 都正好', '默认歌手|撮合无尽 的偶然来尽兴', '默认歌手|随意浪费着美景 才是对它不敬', '默认歌手|没有资格说感性', '默认歌手|但最高兴那刻 会现形', '默认歌手|常在怀疑着 以后 是重重逆境', '默认歌手|所以这样拼', '默认歌手|这派对后 难道你知 在哪里有星', '默认歌手|明年保了寿命 无法肯定', '默认歌手|有力气有憧憬', '默认歌手|明年的签证未过 温馨小店', '默认歌手|或游人过剩', '默认歌手|有风吕 跟暖酒', '默认歌手|你就无谓 等雪溶才尽兴', '默认歌手|完美在这夜擦肩 难道你可补领', '默认歌手|还说下次做更好 谁料这刻是尾声'], 'songName': '东京人寿', 'lyricist': '黄伟文', 'composer': 'Howie@Dear Jane/容祖儿'}}
// 0=封面|1=封底，所以song ID由2开始
const START_SONG_ID = 2
const SONG_IDS = Object.keys(LYRICSS)
const COLORS = ['blue', 'red', 'green']

let isFullscreen = false
let activeBodyIdx = IDX_BODY_COVER
let inputStr = ''
let currCoverIdx = 0
let currBackIdx = 0
let currSongId = START_SONG_ID
enterBody(IDX_BODY_COVER)

function enterFullscreen() {
  const elem = document.documentElement // 获取文档的根元素

  if (elem.requestFullscreen) {
    elem.requestFullscreen()
  } else if (elem.mozRequestFullscreen) { // Firefox
    elem.mozRequestFullscreen()
  } else if (elem.webkitRequestFullscreen) { // Chrome, Safari and Opera
    elem.webkitRequestFullscreen()
  } else if (elem.msRequestFullscreen) { // IE/Edge
    elem.msRequestFullscreen()
  }
  isFullscreen = true
}

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if (document.mozCancelFullscreen) { // Firefox
    document.mozCancelFullscreen()
  } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
    document.webkitExitFullscreen()
  } else if (document.msExitFullscreen) { // IE/Edge
    document.msExitFullscreen()
  }
  isFullscreen = false
}

function isNumeric(str) {
  return !isNaN(str) && !isNaN(parseFloat(str))
}

function enterBody(bodyIdx = IDX_BODY_COVER, idx = 0) {
  activeBodyIdx = bodyIdx
  for (let i = 0; i < bodys.length; i++) {
    if (bodyIdx === i) {
      if (bodyIdx === IDX_BODY_COVER || bodyIdx === IDX_BODY_BACK) {
        const imgName = bodyIdx === IDX_BODY_COVER ? '封面' : '封底'
        bodys[i].style.backgroundImage = `url('img/${imgName}${idx + 1}.jpg')`
        if (bodyIdx === IDX_BODY_COVER) {
          currCoverIdx = idx
        } else {
          currBackIdx = idx
        }
      }
      bodys[i].style.display = 'flex'
    } else {
      bodys[i].style.display = 'none'
    }
  }

  if (bodyIdx === IDX_BODY_LYRICS) {
    // 要在body显示后才能获取到歌词的div
    addLyricsMonitor()
  }
}

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj))
}

function enterSong(songId, idx = 0) {
  if (songId < START_SONG_ID || songId >= SONG_IDS.length + START_SONG_ID) {
    // 输入了不存在的song ID，返回封面或封底
    const bodyIdx = songId < START_SONG_ID ? IDX_BODY_COVER : IDX_BODY_BACK
    // 往左的话，返回到封面最后一页；否则，去到封底第一页
    idx = songId < START_SONG_ID ? (COUNT_COVER - 1) : 0
    enterBody(bodyIdx, idx)
    return
  }

  currSongId = songId * 1
  songNameDiv.textContent = LYRICSS[songId]['songName']
  lyricistDiv.textContent = LYRICSS[songId]['lyricist']
  composerDiv.textContent = LYRICSS[songId]['composer']
  albumCoverDiv.setAttribute('src', LYRICSS[songId]['albumCover'])
  while (lyricsDiv.firstChild) {
    lyricsDiv.removeChild(lyricsDiv.firstChild)
  }

  const lyrics = deepCopy(LYRICSS[songId]['lyrics'])
  let divs = ''
  const singers = []
  lyrics.forEach(lyric => {
    const words = lyric.split('|')
    const singer = words[0]
    let idx = singers.indexOf(singer)
    if (idx === -1) {
      singers.push(singer)
      idx = singers.length - 1
    }
    const tmpLyric = words[1]
    divs += `<div class="lyric-line" tabindex="0" style="color: ${COLORS[idx]}">${tmpLyric}</div>`
  })
  // 以全角空格作为哨兵，控制歌词永远是第二行高亮
  const emptyLine = `<div class="lyric-line" tabindex="0">　</div>`
  if (singers.length === 1) {
    divs = emptyLine + divs
  } else {
    let spans = ''
    for (let i = 0; i < singers.length; i++) {
      spans += `<span style="color: ${COLORS[i]}">${singers[i]}　　</span>`
    }
    divs = `<div class="lyric-line" tabindex="0">${spans}</div>` + divs
  }
  for (let i = 0; i < 3; i++) {
    divs += emptyLine
  }
  lyrics.splice(0, 0, '　')
  lyricsDiv.innerHTML += divs
  const bodyIdx = idx === 0 ? IDX_BODY_SONG : IDX_BODY_LYRICS
  enterBody(bodyIdx)
}

function addLyricsMonitor() {
  const lyrics = Array.from(lyricsBody.querySelectorAll('.lyric-line'))
  lyrics[0].focus()
  lyrics[2].scrollIntoView({
    block: "center",
  })

  const onKeydown = (event) => {
    const index = lyrics.indexOf(document.activeElement)

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      const nextIndex = index + 1
      if (lyrics[nextIndex].textContent === '　') return

      lyrics[nextIndex].focus()
      const centerIndex = index + 2
      lyrics[centerIndex].scrollIntoView({
        block: "center",
      })
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      if (index < 2) return

      const prevIndex = index - 1
      lyrics[prevIndex].focus()
      lyrics[index].scrollIntoView({
        block: "center",
      })
    }
  }

  lyricsBody.removeEventListener('keydown', onKeydown)
  lyricsBody.addEventListener('keydown', onKeydown, {passive: false}) // passive为true的话，preventDefault()不起作用
}

// 在songContainer监听keydown不生效，所以在document加
document.addEventListener('keydown', function (event) {
  event.preventDefault()
  switch (event.key) {
    case 'Enter':
      // 如果之前有数字，进入对应歌曲
      if (isNumeric(inputStr)) {
        inputStr *= 1
        if (inputStr < 2) {
          enterBody(inputStr)
        } else {
          enterSong(inputStr)
        }
      }
      inputStr = ''
      break
    case 'ArrowLeft':
      switch (activeBodyIdx) {
        case IDX_BODY_COVER:
          if (currCoverIdx !== 0) {
            enterBody(IDX_BODY_COVER, currCoverIdx - 1)
          }
          break
        case IDX_BODY_BACK:
          if (currBackIdx === 0) {
            enterSong(SONG_IDS[SONG_IDS.length - 1], 1)
          } else {
            enterBody(IDX_BODY_BACK, currBackIdx - 1)
          }
          break
        case IDX_BODY_SONG:
          enterSong(currSongId - 1, 1)
          break
        case IDX_BODY_LYRICS:
          enterSong(currSongId)
          break
        default:
      }
      break
    case 'ArrowRight':
      switch (activeBodyIdx) {
        case IDX_BODY_COVER:
          if (currCoverIdx === COUNT_COVER - 1) {
            enterSong(SONG_IDS[0])
          } else {
            enterBody(IDX_BODY_COVER, currCoverIdx + 1)
          }
          break
        case IDX_BODY_BACK:
          if (currBackIdx !== COUNT_BACK - 1) {
            enterBody(IDX_BODY_BACK, currBackIdx + 1)
          }
          break
        case IDX_BODY_SONG:
          enterSong(currSongId, 1)
          break
        case IDX_BODY_LYRICS:
          enterSong(currSongId + 1)
          break
        default:
      }
      break
    default:
      inputStr += event.key
  }
}, {passive: false}) // passive为true的话，preventDefault()不起作用

let startX = 0
let startY = 0
const maxSwipeX = 150 // 允许的最大滑动距离
const maxSwipeY = 100 // 允许的最大滑动距离
let lastTap = 0
const doubleTapDelay = 300 // 300毫秒的时间窗口
let clickTimeout = null
let isDblclick = false

document.addEventListener('click', function (event) {
  event.preventDefault()
  clickTimeout = setTimeout(function () {
    if (isDblclick) {
      // 如果是双击，忽略
      return
    }

    if (activeBodyIdx === IDX_BODY_LYRICS) {
      const e = new KeyboardEvent('keydown', {
        key: 'ArrowDown',
      })
      lyricsBody.dispatchEvent(e)
    } else {
      const e = new KeyboardEvent('keydown', {
        key: 'ArrowRight',
      })
      document.dispatchEvent(e)
    }
  }, doubleTapDelay)
}, {passive: false}) // passive为true的话，preventDefault()不起作用

document.addEventListener('dblclick', function (event) {
  event.preventDefault()
  isDblclick = true
  if (activeBodyIdx === IDX_BODY_LYRICS) {
    const e = new KeyboardEvent('keydown', {
      key: 'ArrowUp',
    })
    lyricsBody.dispatchEvent(e)
  } else {
    if (isFullscreen) {
      exitFullscreen()
    } else {
      enterFullscreen()
    }
  }

  setTimeout(function () {
    isDblclick = false
  }, doubleTapDelay)
}, {passive: false}) // passive为true的话，preventDefault()不起作用

document.addEventListener('touchstart', function (event) {
  const touch = event.touches[0]
  event.preventDefault()
  startX = touch.clientX
  startY = touch.clientY
}, {passive: false}) // passive为true的话，preventDefault()不起作用

document.addEventListener('touchend', function (event) {
  const touch = event.changedTouches[0]
  event.preventDefault()
  const endX = touch.clientX
  const endY = touch.clientY

  // 计算触摸起点和终点的距离
  const distanceX = Math.abs(endX - startX)
  const distanceY = Math.abs(endY - startY)
  // 如果滑动距离超出阈值，则认为是滑动手势，忽略点击或双击
  if (distanceX > maxSwipeX || distanceY > maxSwipeY) {
    if (endX - startX > maxSwipeX) {
      const e = new KeyboardEvent('keydown', {
        key: 'ArrowLeft',
      })
      document.dispatchEvent(e)
    } else if (endX - startX < -maxSwipeX) {
      const e = new KeyboardEvent('keydown', {
        key: 'ArrowRight',
      })
      document.dispatchEvent(e)
    }
    return
  }

  const currentTime = new Date().getTime()
  const tapLength = currentTime - lastTap
  if (tapLength < doubleTapDelay && tapLength > 0) {
    // 这是一次双击操作，清除单击的超时操作
    clearTimeout(clickTimeout)
    const e = new MouseEvent('dblclick')
    document.dispatchEvent(e)
  } else {
    // 这是一次单击操作
    clickTimeout = setTimeout(function () {
      const e = new MouseEvent('click')
      document.dispatchEvent(e)
    }, doubleTapDelay)
  }

  lastTap = currentTime
}, {passive: false}) // passive为true的话，preventDefault()不起作用

const slideHeight = window.innerWidth * 720 / 1280
body.style.width = `${window.innerWidth}px`
body.style.height = `${window.innerHeight}px`
const scale = window.innerWidth / 1280
songBody.style.height = `${slideHeight / scale}px`
// 只缩放 背景图片 和 文字，否则布局会乱
songBody.style.backgroundSize = `100%`
document.querySelector('#albumCover').style.scale = scale + ''
document.querySelector('.song-info__words').style.scale = scale + ''
lyricsBody.style.height = `${slideHeight / scale}px`
lyricsBody.style.backgroundSize = `100%`
document.querySelector('.lyrics-container').style.scale = scale + ''
