<template>
  <div class='wrapper'>
    <div class='classify'>
      <div class="classify-inner">
        <div class='classify-item'>
          <i>&gt;</i>
          <span>1111</span>
        </div>
      </div>
      <div class="opertor">
        添加笔记本
      </div>
    </div>
    <div class='classify'>
      <div class='classify-item'>
        <i>&gt;</i>
        <span>2222</span>
      </div>
    </div>
    <div class='classify'>
      <div class='classify-item'>
        <i>&gt;</i>
        <span>4444</span>
      </div>
    </div>
    <div class='article'>4</div>
  </div>
</template>

<script>
// 管理分类
export default {}
</script>
<style lang='scss' scoped>
  @import url('../common/styles/val.scss');
  .wrapper{
    display: flex;
    align-items: stretch;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
  .classify{
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 100%;
    border-right: 1px solid $border-color;
    .opertor{
      height: 50px;
      line-height: 50px;
      text-align: center;
      border-top: 1px solid $border-color;
    }
    .classify-inner{
      flex: 1;
    }
  }

  .classify-item{
    padding: 10px;
    font-size: 14px;
    display: flex;
    align-items: center;
    &:hover{
      background-color: $border-color;
    }
    > i {
      font-style: normal;
      width: 20px;
      text-align: left;
    }
  }
</style>
