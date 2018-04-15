
const Counter = {
  template: `<div><div/>`,
  computed: {
    count () {
      return store.state.count
    }
  }
}
