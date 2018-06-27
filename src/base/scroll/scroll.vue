<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>
<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
export default {
  props: {
    protoType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    data() {
      return {
        type: Array,
        default: null
      }
    },
    mounted() {
      setTimeout( () => {
        this._initScroll()
      },20)
      
    },
    methods: {
      _initScroll() {
         if (!this.$refs.wrapper) {
            return
        }
        this.scroll = new BScroll(this.$refs.wrapper, {
          protoType: this.protoType,
          click: this.click
        })
      },
      enable() {
        this.scroll && this.scroll.enable()
      },
      disable() {
        this.scroll && this.scroll.disable()
      },
      // 刷新scroll,重新计算高度
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      // 监听数据变化，刷新scroll
      watch: {
        data() {
          setTimeout( () => {
            this._initScroll()
          }, 20)
        }
      }
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus" >
    

</style>