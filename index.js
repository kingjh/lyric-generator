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
const LYRICSS = {2: {'albumCover': 'https://img1.kuwo.cn/star/albumcover/700/84/12/2395992766.jpg', 'lyrics': ['男|默默地喝着茶暗中的计算', '男|茶杯中风波将扩展', '女|若是没要事你怎会约我相见', '女|分手讲到了咀边', '女|让静默去蔓延救不了你太多遍', '女|逃走还更方便', '男|良心不知怎算', '男|事实上对白已经练习十余遍', '男|临阵却觉得心软', '女|毋须打开天窗', '女|能装不知也算体谅', '女|狠心揭破真相', '女|无非想扮诚实来换舒畅', '男|我不风凉', '男|谁想开多一枪', '男|实在杀手还会心伤', '女|今天晚宴就由你付账', '男|这笔欠债应该我付账', '女|自问亦有形象未愿暴露惆怅', '女|我会扮做无人欠我分开只因我想', '男|我会落力来承接你分手也要合唱', '女|毋须打开天窗', '男|难道我很无良', '女|能装不知也算体谅', '男|情愿揭开天窗', '女|狠心揭破真相', '女|无非想扮诚实来换舒畅', '男|痛苦收场', '女|毋须开多一枪', '男|杀得多么勉强', '女|即使分手要有修养', '男|落泪杀手但愿见谅', '女|今天晚宴就由你付账', '男|这笔欠债应该我付账', '男|这结局美丽过真相要冷静到终章', '女|毫无杀气', '男|为了前度设想', '女|不必心伤', '女|毋须打开天窗', '男|能装不知也算体谅', '女|狠心揭破真相', '男|假使今天你想', '女|无非想扮诚实来换取舒畅', '男|轻身走出震央', '女|毋须开多一枪', '男|杀得多么勉强', '女|即使分手要有修养', '男|落泪杀手但愿见谅', '女|今天晚宴就由你付账', '男|今天晚宴应该我付账', '男|不必送我', '女|大门要', '合|关上'], 'songName': '天窗', 'lyricist': '黄伟文', 'composer': '周柏豪'}}
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
