const env = process.argv[2]
require('../env/env-'+env)
const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const fs = require('fs')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')


// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
fs.readdirSync('./routes').forEach(function(file){
    if(file.indexOf(".js")>-1){
        app.use(require('./routes/'+file).routes());
    }
})
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

/* istanbul ignore next */
if (!module.parent) {
    var port = isNaN(parseInt(process.argv[3])) ? 4000 : parseInt(process.argv[3]);
    app.listen(port);
    console.log('Express started on port ' + port);
}
module.exports = app
