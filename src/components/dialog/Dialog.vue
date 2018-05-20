<template>
  <div v-show='show' class='dialog-wrapper'>
    <div class="dialog">
      <slot />
    </div>
    <div class="dialog-bg"></div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean
    }
  },
  created: function () {
    console.log(this.show)
  }
}
</script>

<style lang='scss' scoped>
  .dialog-wrapper{
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
  }
  .dialog{
    background-color: $dialog-bg-color;
  }
  .dialog-bg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .1);
    z-index: -1;
  }
</style>
