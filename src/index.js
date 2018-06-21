const Koa = require('koa');
const enforceHttps = require('koa-sslify');
const fs = require('fs');
const https = require('https')

const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/weixin.gyfgugugu.com/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/weixin.gyfgugugu.com/fullchain.pem')
}
// const test = require('./middle/test.js')

const app = new Koa();

app.use(enforceHttps())
// app.use(test())

// 响应
app.use(ctx => {
    ctx.body = 'This is my App';
});

https.createServer(options, app.callback()).listen(443)
