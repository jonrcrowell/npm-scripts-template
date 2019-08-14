// require modules
var fs = require('fs');

const targetFunctions = ['graphitti7', 'graphitti8', 'hksjcb1']
const targetFunction = process.argv[2]

if (!targetFunctions.includes(targetFunction)) {
    // incorrect or no target specified
    throw "You need to specify a valid Azure function as the target for deployment. If you've added a new function, make sure it is in the targetFunctions array in zipserver.js.";
}

configureCorrectProxiesFile(targetFunction);


function configureCorrectProxiesFile(target) {
    // replace proxies.json with the version for the specified target function
    replaceContents('../proxies.json', `../proxies.json.${target}`, err => {
        if (err) {
            // handle errors here
            throw err;
        }
        console.log('done');
    });
}

function replaceContents(file, replacement, cb) {
    fs.readFile(replacement, (err, contents) => {
        if (err) return cb(err);
        fs.writeFile(file, contents, cb);
    });
}