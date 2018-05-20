<template>
  <div class='book-wrapper'>
    <div class='book-col'>
      <classify />
    </div>
    <div class='book-col book-menu-wrapper'>
      <div class="book-menu-title">
        <div>标题</div>
      </div>
      <div class="book-menu">
        <classify />
        <classify />
      </div>
    </div>
    <div class='book-col book-article'>article</div>
  </div>
</template>

<script>
import Classify from './Classify.vue'
export default {
  components: {
    Classify
  }
}
</script>

<style lang='scss' scoped>
  .book-wrapper{
    position: fixed;
    display: flex;
    align-items: stretch;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $book-bg-color;
  }
  .book-col{
    display: flex;
    align-items: stretch;
  }
  .book-menu-wrapper{
    flex-direction: column;
  }
  .book-menu-title{
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-width: 0 1px 1px 0;
    border-color: $color;
    border-style: solid;
  }
  .book-menu{
    display: flex;
    flex-direction: row;
    flex: 1
  }
  .book-article{
    flex: 1;
  }
</style>
