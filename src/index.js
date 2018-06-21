const Koa = require('koa');



// const test = require('./middle/test.js')

const app = new Koa();

// app.use(test())

// 响应
app.use(ctx => {
    ctx.body = 'This is my App';
});

app.listen(3001)
