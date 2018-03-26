export function fetchItem() {
  return new Promise((resolve, reject) => {
    reject({
      name: 'abc',
      age: 17,
      title: 'abc'
    });
  });
}