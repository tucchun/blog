let MongoClient = require("mongodb").MongoClient;
let url = "mongodb://127.0.0.1:27017/";

// MongoClient.connect(url, (err, db) => {
//   if (err) throw err;
//   let dbo = db.db('db');


//   let data = [
//     {
//       name: '菜鸟工具',
//       url: 'https://c.runoob.com',
//       type: 'cn'
//     },
//     {
//       name: 'Google',
//       url: 'https://www.google.com',
//       type: 'en'
//     },
//     {
//       name: 'Facebook',
//       rul: 'https://www.google.com',
//       type: 'en'
//     }
//   ];

//   dbo.collection('db').insertMany(data, (err, res) => {
//     if (err) throw err;
//     console.log('插入文档成功', JSON.stringify(res));
//     db.close();
//   });
// });


// 查询数据
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbo = db.db('db');
  let condition = {"name": '菜鸟工具'};
  dbo.collection('db').find(condition).toArray((err, result) => {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});







