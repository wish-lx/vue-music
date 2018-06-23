<template>
  <div class="recommend">
    <div class="recommend-content">
      <div class="slider-wrapper">
       
      </div>
      <div class="recommend-list">
        <h1 class="list-title">
          热门歌单推荐
        </h1>
        <ul></ul>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import Slider from 'base/slider/slider'
import {getDiscList} from 'api/recommend'
import {ERR_OK} from 'api/config'

 export default {
   
   created() {
    this._getDiscList()
   },
   methods: {
     _getDiscList() {
       getDiscList().then((res) => {
         if (res.code === ERR_OK) {
           console.log(res.data.list)
         }
       })
     }
   },
   components: {
     Slider
   }
 }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus" >
  

</style>