const cp = require('child_process');
const path = require('path');
const fs = require('fs');

// useful changelog regexp for atom
// \(#([0-9]+)\) [#$1](https://github.com/fabricjs/fabric.js/pull/$1)

// eslint-disable-next-line no-undef
const pkgPath = path.resolve(__dirname, './package.json');
const pkgText = fs.readFileSync(pkgPath); // get original pkg text to restore it later
const pkgObject = JSON.parse(pkgText); // parsed pkg to override its fields
let args = process.argv.slice(2).join(' '); // args will be passed to npm publish (like --dry-run)
const preRelease = process.env.PRE_RELEASE;

// allow publishing of pre-releases with beta tag
if (preRelease === 'true') {
  console.log('Adding beta tag to NPM publish');
  args = '--tag beta ' + args;
}

// override package.json with updated fields
fs.writeFileSync(
  pkgPath,
  JSON.stringify(Object.assign(pkgObject, {
    optionalDependencies: {},
    version: pkgObject.version + '-browser',
  }), null, '\t'),
);

console.log('npm publish ' + args);

// publish -browser version
cp.execSync('npm publish ' + args);

console.log('Browser package is published');

// restore the original package.json contents
fs.writeFileSync(pkgPath, pkgText);

// publish the main version (the package is published "above" the -browser version)
cp.execSync('npm publish ' + args);

console.log('Main package is published');
