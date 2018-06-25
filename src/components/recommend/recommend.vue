<template>
  <div class="recommend">
    <div class="recommend-content">
      <div v-if="recommends.length" class="slider-wrapper">
       <slider>
         <div v-for="item in recommends" :key="item.id">
           <a :href="item.linkUrl">
             <img :src="item.picUrl">
           </a>
         </div>
       </slider>
      </div>
      <div class="recommend-list">
        <h1 class="list-title">
          热门歌单推荐
        </h1>
        <ul>
           <li class="item" v-for="item in discList" :key="item.id">
              <div class="icon">
                <img :src="item.imgurl" width="60">
              </div>
              <div class="text">
                <h2 class="name" v-html="item.creator.name"></h2>
                <p class="desc" v-html="item.dissname"></p>
              </div>
           </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import Slider from 'base/slider/slider'
// import {getDiscList, getRecommend} from 'api/recommend'
import {ERR_OK} from 'api/config'

 export default {
   data() {
     return {
        recommends: [],
        discList: [] 
     }
   },
   created() {
    // this._getDiscList()
    // this._getRecommend()
    this.$ajax.get('/api/slider').then(response => { 
      const data = response.data
      if (ERR_OK === data.code) {
        this.recommends = data.data.slider
      }
    })
    this.$ajax.get('/api/list').then(response => { 
      const data = response.data
      if (ERR_OK === data.code) {
        this.discList = data.data.list
      } 
    })
   },
   methods: {
    //  _getRecommend() {
    //    getRecommend().then((res) => {
    //      if (res.code === ERR_OK) {
    //        console.log(res.data.slider)
    //      }
    //    })
    //  },
    //  _getDiscList() {
    //    getDiscList().then((res) => {
    //      if (res.code === ERR_OK) {
    //        console.log(res.data.list)
    //      }
    //    })
    //  }
   },
   components: {
     Slider
   }
 }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus" >
  @import '../../common/stylus/variable'
  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d

</style>