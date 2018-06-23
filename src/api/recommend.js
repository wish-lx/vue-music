import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'



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