import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  data: {
    title: 'hello'
  },
  template: `
    <h1>{{title}}</h1>
  `
}).$mount('#app')
