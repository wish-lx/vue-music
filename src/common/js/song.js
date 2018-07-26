import {getLyric} from 'api/song'
import {ERR_OK} from 'api/config'

export default class Song {
  constructor({id, mid, singer, name, album, duration, image, url}) {
     this.id = id
     this.mid = mid
     this.singer = singer
     this.name = name
     this.album = album
     this.duration = duration
     this.image = image
     this.url = url
  }
  getLyric(){
    getLyric(this.mid).then((res) => {
      if(res.retcode === ERR_OK) {
        this.lyric = res.lyric
        console.log(this.lyric)
      }
    })
  }
}


// 工厂方法
export function createSong(musicData) {
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    // image: `https://y.gtimg.cn/music/photo_new/T001R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    // url: `http://ws.stream.qqmusic.qq.com/${musicData.songid}.m4a?fromtag=46`,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    // url: `http://ws.stream.qqmusic.qq.com/C100${musicData.mid}.m4a?fromtag=0&guid=126548448`
    url: `http://ws.stream.qqmusic.qq.com/C100${musicData.songmid}.m4a?fromtag=0&guid=126548448`

  })
}
// 将singer对象转化为字符串
function filterSinger(singer) {
  let ret = []
  if (!singer) {
    return ''
  }
  singer.forEach((item) => {
    ret.push(item.name)
  })
  return ret.join('/')
}