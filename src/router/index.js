const router = require('koa-router')()

const Controller = require('../controller/index.js')

// console.log(Controller.Home)

module.exports = app => {

    router.get('/home', Controller.Home)

    router.get('/detail', Controller.detail)

    app.use(router.routes())

}