const router = require('koa-router')()

const Controller = require('../controller/index.js')

// console.log(Controller.Home)

module.exports = app => {

    router.get('/home', Controller.Home)

    app.use(router.routes())

}