<template>
  <div class="m-header">
   recommend
  </div>
</template>
<script type="text/ecmascript-6">
import {getRecommend} from 'api/recommend'
import {ERR_OK} from 'api/config'

 export default {
   data() {
     return {
       
     }
   },
   created() {
    this._getRecommend()
   },
   methods: {
     _getRecommend() {
       getRecommend().then((res) => {
         if (res.code === ERR_OK) {
           
         }
       })
     }
   }
 }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus" >
  

</style>