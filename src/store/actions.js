// 异步操作 异步修改 或者对mutation做一些封装,提交mutation
import * as types from './mutation-types'

export const selectPlay = function ({commit, state}, {list, index}) {
 commit(types.SET_SEQUENCE_LIST, list)
 commit(types.SET_PLAYLIST, list)
 commit(types.SET_CURRENT_INDEX, index)
 commit(types.SET_FULL_SCREEN, true)
 commit(types.SET_PLAYING_STATE, true)
}