<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot>
      </slot>
    </div>
    <div class="dots" >
        <span class="dot" v-for="(item, index) in dots" :class="{active:
        currentPageIndex === index}">
        </span>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import {addClass} from 'common/js/dom'
export default {
  data() {
   return {
     dots: [],
     currentPageIndex: 0
   }
  },
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
     this._initDots()
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
    _initDots() {
       this.dots = new Array(this.children.length)
    },
      _initSlider() {
        // 初始化slider
        this.slider = new BScroll(this.$refs.slider, {
          // 支持横向滚动
          scrollX: true,
          // 不支持纵向滚动
          scrollY: false,
          // 当快速在屏幕上滑动一段距离的时候，会根据滑动的距离和时间计算出动量，并生成滚动动画。设置为 true 则开启动画。
          momentum: false,
          // snap: true,
          // // 循环
          // snapLoop: this.loop,
          // snapThreshold: 0.3,
          // snapSpeed: 400,
          snap: {
            loop: this.loop,
            snapThreshold: 0.3,
            snapSpeed: 400
          },
          // 允许点击
          click: true
      
        })
        // 当每一屏滑动完成的时候会触发scrollEnd事件
        // getCurrentPage():{ x: posX, y: posY,pageX: x, pageY: y} 
        // 其中，x 和 y 表示偏移的坐标值，
        // pageX 和 pageY 表示横轴方向和纵轴方向的页面数。
        // 作用：获取当前页面的信息。
        this.slider.on('scrollEnd', () => {
          let pageIndex = this.slider.getCurrentPage().pageX 
          if(this.loop) {
            pageIndex -= 1
          }
          this.currentPageIndex = pageIndex

        })
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
      .dots
        position: absolute 
        right: 0
        left: 0
        bottom: 20px 
        text-align: center
        font-size: 0
        .dot 
          display: inline-block
          margin: 0 4px 
          width: 8px 
          height: 8px 
          border-radius: 50% 
          background-color: $color-text-l
          &.active 
           width: 20px
           border-radius:5px 
           background: $color-text-ll     

</style>