<template>
  <div>
    <div class='book-wrapper'>
      <div class='book-col'>
        <classify
          title='TUCCHUN'
          btnValue='添加笔记'
          v-on:onClickBottomBtn='addBook'
        />
      </div>
      <div class='book-col book-menu-wrapper'>
        <div class="book-menu-title">
          <div>TUCCHUN&nbsp;的笔记</div>
        </div>
        <div class="book-menu">
          <classify
            btnValue='添加分区'
            v-on:onClickBottomBtn='addPartition'
          />
          <classify
            btnValue='添加页面'
            v-on:onClickBottomBtn='addPage'
          />
        </div>
      </div>
      <div class='book-col book-article'>{{ show }}</div>
    </div>
    <Modal v-bind:show='show'>
      <div class='form-wrapper'>
        <div class='form-control'>
          <input type=text />
        </div>
        <div class='form-btns'>
          <button class='ok'>确认</button>
          <button class='cancel' v-on:click='doCancelAddClassify'>取消</button>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import Classify from '../components/classify/Classify.vue'
import Modal from '../components/dialog/Dialog.vue'
export default {
  data () {
    return {
      show: false
    }
  },
  components: {
    Classify,
    Modal
  },
  methods: {
    addBook: function (e) {
      console.log('添加笔记')
      this.show = true
    },
    addPartition: function (e) {
      console.log('添加分区')
    },
    addPage: function (e) {
      console.log('添加页面')
    },
    doCancelAddClassify () {
      this.show = false
    }
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
  }
  .form-wrapper{
    width: 400px;
    padding: 20px;
  }
  .form-control,
  .form-btns{
    width: 100%;
    padding: 0;
    margin: 20px 0;
  }
  .form-control > input[type=text]{
    box-sizing: border-box;
    width: 100%;
    height: 38px;
    line-height: 38px;
    border: 1px solid $color;
  }
  .form-btns{
    display: flex;
    align-items: stretch;
  }
  .form-btns > button{
    width: 50%;
    border: none;
    height: 40px;
    outline: none;
    cursor: pointer;
  }
  .form-btns > button:hover{
    opacity: .9;
  }
  .ok {
    background-color: #1890ff;
    color: #fff;
  }
  .cancel {
    background-color: #f5f5f5;
    color: rgba(0,0,0,.65);
  }
</style>
