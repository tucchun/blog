
import Vue from 'vue'
import Vuex, {mapState, mapGetters} from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      {id: 1, text: 'one', done: true},
      {id: 2, text: 'two', done: false}
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

const CounterExample = {
  template: `
    <div>
      <p>{{doneTodosCount}}</p>
      <p>{{doneTodos}}</p>
      <p>{{todos}}</p>
      <p v-for='todo in doneTodos'>
        {{todo.text + ' ' + todo.id}}
      </p>
    </div>
  `,
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
  template: `
    <div>
      <counter-example></counter-example/>
    </div>
  `
})
