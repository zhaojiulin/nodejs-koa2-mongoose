const Router = require('koa-router')
const router = new Router();
const userC = require('../controller/user')
router

.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})
.post('/signUp',userC.signUp)
.post('/getUserById',userC.getUser)
.post('/updateUser',userC.updateUser)
module.exports = router
