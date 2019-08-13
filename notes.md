# Notes

Passing the port in as an argument to the start:dev script should be useful.

Need to add eslint according to how Brian Holt sets it up. Watch his video and document here. This should be part of my standard setup, in the same way that .prettierrc and git are.

Linting before running tests is a great idea. Add eslint to my pretest script -- it will stop if it finds any errors -- and then I can fix those before my test suite runs.

```
npm install -D eslint eslint-config-prettier
```

After installing eslint, I need to add an eslintrc file. It has to have the .json extension:

```
eslintrc.json
```
