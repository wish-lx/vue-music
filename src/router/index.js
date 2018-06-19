import Vue from 'vue'
import Router from 'vue-router'

import Rank from 'components/rank/rank'
import Recommend from 'components/recommend/recommend'
import Search from 'components/search/search'
import Singer from 'components/singer/singer'
import Tab from 'components/tab/tab'

Vue.use(Router)

export default new Router({
  routes:[
    {
      path: '/rank',
      components: Rank
    },
    {
      path: '/recommend',
      components: Recommend
    },
    {
      path: '/search',
      components: Search
    },
    {
      path: '/singer',
      components: Singer
    },
    {
      path: '/tab',
      components: Tab
    }
  ]
})
