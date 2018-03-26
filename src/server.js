const path = require('path');
var express = require('express');
var app = express();
const template = require('fs').readFileSync(path.resolve(__dirname + '/index.template.html'), 'utf-8');
const { createBundleRenderer } = require('vue-server-renderer');
const serverBundle = require(path.resolve(__dirname + '/../dist/vue-ssr-server-bundle.json'));
const clientManifest = require(path.resolve(__dirname + '/../dist/vue-ssr-client-manifest.json'));


const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false, // 推荐
  template, // （可选）页面模板
  clientManifest // （可选）客户端构建 manifest
});
app.use(express.static(path.resolve(__dirname + '/../dist')));
// 在服务器处理函数中……
app.get('*', (req, res) => {
  console.log(req.url);
  const context = {
    url: req.url,
    title: 'hello',
    meta: `
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
    `
  };
  // 这里无需传入一个应用程序，因为在执行 bundle 时已经自动创建过。
  // 现在我们的服务器与应用程序已经解耦！
  renderer.renderToString(context, (err, html) => {
    console.log(err, html);
    if (err) {
      if (err.code === 404) {
        res.status(404).end('Page not found');
      } else {
        res.status(500).end("Internal Server Error");
      }
    } else {
      res.end(html);
    }
  });
});

app.listen('8080', function () {
});