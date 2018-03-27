import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/components/Index.vue'
Vue.use(VueRouter)

const Foo = {
  template: '<div>foo</div>'
}

const Bar = {
  template: '<div>bar</div>'
}

const UserProfile = {
  template: `<div>UserProfile</div>`
}

const UserPosts = {
  template: `<div>UserPosts</div>`
}
const UserHome = {
  template: `<div>UserHome</div>`
}
const User = {
  computed: {
    username () {
      return this.$route.params.username
    }
  },
  template: `
    <div>
      <h5>{{username}}</h5>
      <div>
        <router-link :to='{path: "/user/" + username + "/profile"}'>profile</router-link>
        <router-link to='{path: "/user/" + username + "/posts"}'>posts</router-link>
      </div>
      <div>
        <router-view></router-view>
      </div>

    </div>
  `,
  watch: {
    $route (to, from) {
      console.log('$route', to, from)
    }
  },
  beforeRouteUpdate (to, from, next) {
    console.log('beforeRouteUpdate', to, from, next)
    next()
  }
}

const routes = [
  {
    path: '/foo',
    component: Foo
  },
  {
    path: '/bar',
    component: Bar
    // redirect: {
    //   name: 'home',
    //   params: {
    //     username: 111
    //   }
    // }
  },
  {
    path: '/home/:username',
    component: Index,
    name: 'home',
    // props: {
    //   title: 'title'
    // },
    props: (route) => ({
      title: 'helloworld',
      username: route.params.username
    })
  },
  {
    path: '/user/:username',
    component: User,
    children: [
      {
        path: '',
        component: UserHome
      },
      {
        path: 'profile',
        component: UserProfile
      },
      {
        path: 'posts',
        component: UserPosts
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  router
}).$mount('#app')
