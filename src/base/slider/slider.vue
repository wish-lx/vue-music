<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot>
      </slot>
    </div>
    <div class="dots">
        
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
// import BScroll from 'better-scroll'
import {addClass} from 'common/js/dom'
export default {
  props: {
    // 循环播放
    loop: {
      type: Boolean,
      default: true
    },
    // 无缝轮播
    autoPlay: {
      type: Boolean,
      default: true 
    },
    // 轮播间隔时间
    interval: {
      type: Number,
      default: 4000
    }
  },
  mounted() {
    // 保证DOM渲染成功
   setTimeout(() => {
     this._setSliderWidth()
     this._initSlider()
   }, 20)
  },
  methods: {
    _setSliderWidth() {
      this.children = this.$refs.sliderGroup.children

      let width = 0
      let sliderWidth = this.$refs.slider.clientWidth
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i]
        addClass(child, 'slider-item ')
        child.style.width = sliderWidth + 'px'
        width += sliderWidth
      }
      if (this.loop) {
        width += 2 * sliderWidth
      }
      this.$refs.sliderGroup.style.width = width + 'px'
    },
      _initSlider() {
     }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus" >
  @import '../../common/stylus/variable'
    .slider
      min-height: 1px 
      .slider-group
        position: relative 
        overflow: hidden
        white-space: nowrap 
        .slider-item 
          float:left
          box-sizing: border-box
          over-flow: hidden 
          text-align: center
          a 
           display: block
           width: 100% 
           overflow: hidden
           text-decoration: none 
          img 
            display: block
            width: 100%
           

</style>