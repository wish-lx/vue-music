// 异步操作 异步修改 或者对mutation做一些封装
import * as types from './mutation-types'

export const selectPlay = function ({commit, state}, {list, index}) {
 commit(types.SET_SEQUENCE_LIST, list)
 commit()
}