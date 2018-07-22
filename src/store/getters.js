// 获取state,做一些映射
export const singer = state => state.singer

export const playing = state => state.playing

export const fullScreen = state => state.fullScreen

export const playlist = state => state.playlist

export const sequenceList = state => state.sequenceList

export const mode = state => state.mode

export const currentIndex = state => state.currentIndex
// 计算属性功能
export const currentSong = (state) => {
  return state.playlist[state.currentIndex] || {}
}