const Koa = require("koa");
const app = (module.exports = new Koa());

app.use(async ctx => {
    console.log("restart")
    ctx.body = "Howdy from Koa!";
});

const port = process.env.PORT || (process.argv[2] || 4000);

if (!module.parent) { app.listen(port); }
console.log(`Application started. Listening on port: ${port}`);
