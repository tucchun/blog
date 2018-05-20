<template>
  <div class='classify-wrapper'>
    <div v-if='title' class='classify-title'>{{ title }}</div>
    <div class='classify-list'>
      <div class='classify-item' v-for='classify in classifyList' v-bind:key='classify.id'>
        <i>&gt;</i>
        <span>{{ classify.value }}</span>
      </div>
    </div>
    <div class='classify-opertor' v-on:click='doClickBottomBtn'>
      {{ btnValue }}
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'title',
    'classifyList',
    'btnValue'
  ],
  methods: {
    doClickBottomBtn: function (e) {
      this.$emit('onClickBottomBtn', e)
    }
  }
}
</script>

<style lang='scss' scoped>
.classify-wrapper{
  display: flex;
  align-items: stretch;
  flex-direction: column;
  width: 200px;
  .classify-title,
  .classify-opertor{
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-color: $color;
    border-style: solid;
  }
  .classify-title{
    border-width: 0 1px 1px 0;
  }
  .classify-opertor{
    border-width: 1px 1px 1px 0;
    cursor: pointer;
  }
  .classify-list{
    display: flex;
    flex: 1;
    flex-direction: column;
    border-right: 1px solid $color;
  }
  .classify-item{
    padding: 10px;
    font-size: 14px;
    display: flex;
    align-items: center;
    &:hover{
      background-color: $color;
    }
    > i {
      font-style: normal;
      width: 20px;
      text-align: left;
    }
  }
}
</style>
