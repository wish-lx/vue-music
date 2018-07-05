import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import State from './state'
import Mutations from './mutations'
import CreateLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = precess.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  State,
  Mutations,
  strict: debug,
  plugins : debug ? [CreateLogger()] : []
})