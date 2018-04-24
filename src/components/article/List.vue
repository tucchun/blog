<template>
  <div class="newblogs">
    <h2 class="hometitle">最新文章</h2>
    <ul>
      <Item />
    </ul>
  </div>
</template>

<script>
import Summary from './Summary.vue'
export default {
  components: {
    Item: Summary
  }
};
</script>

<style>
.newblogs {
  background: #fff;
  overflow: hidden;
  width: 68%;
  float: left;
}
</style>
