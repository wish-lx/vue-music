import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'
// 使用jsonp方式获取歌手列表数据
export function getSingerList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq'
    
  })
  return jsonp(url, data, options)
}