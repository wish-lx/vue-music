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
    }),
    this.$ajax.get('/api/list').then(response => { 
      const data = response.data
      if(ERR_OK === data.code) {
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
  .recommend
    position: relative

</style>