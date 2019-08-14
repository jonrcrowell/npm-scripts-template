# Questions

What is the command to stop an application from running?
Certain apps don't stop correctly and continue to run on the specified port. I want to know how to stop the app without having to use a killport process.

Marcus Hammarberg resolved the issue using this code in his index.js file:

```js
const port = process.env.PORT || (process.argv[2] || 4000);

if (!module.parent) { app.listen(port); }
console.log(`Application started. Listening on port: ${port}`);
```
