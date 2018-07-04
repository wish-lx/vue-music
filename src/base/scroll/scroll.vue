<template>
  <div ref="wrapper">
    <slot> </slot>
  </div>
</template>
<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
export default {
    props: {
      probeType: {
        type: Number,
        default: 1
      },
      click: {
        type: Boolean,
        default: true
      },
      data: {
        type: Array,
        default: null
      },
      // scroll是否监听滚动事件
      listenScroll: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      // 页面数据刷新完成后执行better-scroll
      setTimeout(() => {
        this._initScroll()
      }, 20)
    },
    // 监听数据变化，刷新scroll
      watch: {
        data() {
          setTimeout(() => {
            this.refresh()
          }, 20)
        }
      },
    methods: {
      _initScroll() {
         if (!this.$refs.wrapper) {
            return
        }
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: this.click
        })
        if (this.listenScroll) {
          // vue实例
          let me = this
          // 监听滚动事件，拿到位置
          this.scroll.on('scroll', (pos) => {
            me.$emit('scroll', pos)
          })
        }
      },
      enable() {
        // 启用better-scroll，默认开启
        this.scroll && this.scroll.enable()
      },
      disable() {
        this.scroll && this.scroll.disable()
      },
      // 数据改变，刷新scroll,重新计算高度
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      scrollTO() {
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
      },
      scrollToElement() {
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
      }
      
    }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus" >
    

</style>