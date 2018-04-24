
import Vue from 'vue'
import Vuex, { mapState, mapGetters } from 'vuex'
Vue.use(Vuex)

let moduleA = {
  state: {
    count: 0,
    todos: [
      { id: 1, text: 'one', done: true },
      { id: 2, text: 'two', done: false }
    ]
  },
  getters: {
    // doneTodos: state => {
    //   return state.todos.filter(todo => todo.done)
    // },
    // doneTodosCount: (state, getters) => {
    //   return getters.doneTodos.length
    // },
    // getTodoById: (state) => (id) => {
    //   return state.todos.find(todo => todo.id === id)
    // }
  },
  mutations: {
    increment (state) {
      debugger
      state.count++
    }
  },
  actions: {
    increment (context) {
      setTimeout(() => {
        context.commit('increment')
      }, 3 * 1000)
    }
  }
}

let moduleB = {
  state: {
    count: 0,
    todos: [
      { id: 1, text: 'one', done: true },
      { id: 2, text: 'two', done: false }
    ]
  },
  getters: {
    // doneTodos: state => {
    //   return state.todos.filter(todo => todo.done)
    // },
    // doneTodosCount: (state, getters) => {
    //   return getters.doneTodos.length
    // },
    // getTodoById: (state) => (id) => {
    //   return state.todos.find(todo => todo.id === id)
    // }
  },
  mutations: {
    increment (state) {
      debugger
      state.count++
    }
  },
  actions: {
    increment (context) {
      setTimeout(() => {
        context.commit('increment')
      }, 3 * 1000)
    }
  }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

const CounterExample = {
  template: `
    <div>
      <p>count: {{count}}</p>
      <p>{{todos}}</p>
      <button @click='increment'>increment</button>
    </div>
  `,
  methods: {
    increment: function () {
      debugger
      this.$emit('increment')
    }
  },
  computed: {
    ...mapState({
      count: 'count',
      todos: 'todos'
    }),
    ...mapGetters([
      'doneTodosCount',
      'doneTodos'
    ])
  }
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: {
    CounterExample: CounterExample
  },
  methods: {
    'increment': function () {
      debugger
      this.$store.dispatch('increment')
    }
  },
  template: `
    <div>
      <counter-example @increment='increment'></counter-example/>
    </div>
  `
})
