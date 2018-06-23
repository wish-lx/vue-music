import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'
import axios from 'axios'

// 使用后端代理方式请求接口数据
export function getRecommend() {
  const url = '/api/getRecommend'

  const data = Object.assign({}, commonParams, {
      platform: 'h5',
      uin: 0,
      needNewCode: 1,
      format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 使用jsonp方式请求歌单数据
export function getDiscList() {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'

  const data = Object.assign({}, commonParams, {
          hostUin: 0,
          sin: 0,
          ein: 29,
          sortId: 5,
          needNewCode: 0,
          categoryId: 10000000,
          rnd: Math.random(),
          platform: 'yqq'

      })
      return jsonp(url, data, options)
}
