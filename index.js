const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    ctx.body = "Howdy from Koa!"
})

const port = process.env.PORT || (process.argv[2] || 4000)

app.listen(port)
console.log(`Application started. Listening on port: ${port}`)