const Vue = require("vue");
const server = require('express')();
const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync('./src/index.template.html', 'utf-8')
});
const context = {
  title: 'hello',
  meta: `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
  `
};

server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>访问的URL是：{{url}}</div>`
  });
  renderer.renderToString(app, context, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error');
      return;
    }

    res.end(html);
  });
});

server.listen(8080);


