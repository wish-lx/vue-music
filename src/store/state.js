// 所有状态
import {playMode} from 'common/js/config'

const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  // 播放列表
  playlist: [],
  // 顺序列表
  sequenceList: [],
  mode: playMode.sequence,
  currentIndex: -1
}
export default state