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
          // probeType: this.probeType,
          // click: this.click
        })
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
      }
      
    }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus" >
    

</style>