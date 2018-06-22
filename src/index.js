const Koa = require('koa');

const router = require('./router');

// const test = require('./middle/test.js')

const app = new Koa();

// app.use(test())

// 响应
// app.use(ctx => {
//     ctx.body = 'This is my App';
// });

router(app)

app.listen(3001)
