[circleci-url]: https://circleci.com/gh/mgthomas99/random2
[circleci-shield-url]: https://img.shields.io/circleci/project/github/mgthomas99/random2.svg
[codecov-url]: https://codecov.io/gh/mgthomas99/random2
[codecov-shield-url]: https://img.shields.io/codecov/c/github/mgthomas99/random2.svg
[license-url]: https://github.com/mgthomas99/random2/blob/master/LICENSE
[license-shield-url]: https://img.shields.io/github/license/mgthomas99/random2.svg
[npm-url]: https://www.npmjs.com/package/random2
[npm-shield-url]: https://img.shields.io/npm/v/random2.svg

# random2
[![npm][npm-shield-url]][npm-url]
[![license][license-shield-url]][license-url]
[![CircleCI][circleci-shield-url]][circleci-url]
[![CodeCov][codecov-shield-url]][codecov-url]

Seeded pseudorandom number generator object implementation for NodeJS.

## Usage
`npm install random2 --save`

Use it in your JS like so:
```
var Random = require("random2").Random;

var myRandom = new Random();
myRandom.next(); // Get a number
```
Or create a seeded instance:
```
var myRandom = new Random(42);
myRandom.next();
```

## Build
The project's `package.json` has useful scripts for building the project:
```
npm install
npm run build
npm test
```

### Typings
Typescript defenitions are included with the package.
```
import { Random } from "random2";
let myRandom = new Random();
myRandom.next(); // => Get a number
```
