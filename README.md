[circleci-url]: https://circleci.com/gh/mgthomas99/next-random
[circleci-shield-url]: https://img.shields.io/circleci/project/github/mgthomas99/next-random.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/mgthomas99/next-random
[codecov-shield-url]: https://img.shields.io/codecov/c/github/mgthomas99/next-random.svg?style=flat-square
[license-url]: https://github.com/mgthomas99/next-random/blob/master/LICENSE
[license-shield-url]: https://img.shields.io/github/license/mgthomas99/next-random.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/next-random
[npm-shield-url]: https://img.shields.io/npm/v/next-random.svg?style=flat-square

# next-random

[![NPM][npm-shield-url]][npm-url]
[![license][license-shield-url]][license-url]
[![CircleCI][circleci-shield-url]][circleci-url]
[![CodeCov][codecov-shield-url]][codecov-url]

Seeded pseudorandom number generator object implementation for NodeJS, written
in TypeScript with type definitions and 100% code coverage.

## Usage

`npm install random2 --save`

Use it in your JS like so:

```js
    var nextrandom = require("next-random");
    var myRandom = new nextrandom.Random();
    myRandom.next(); // 0.4939263087001966
```

Or create a seeded instance:

```js
    var myRandom = new Random(42);
    myRandom.next(); // 0.9165215479156338
```

### Build

The project's `package.json` has useful scripts for building the project:

```sh
    npm install
    npm run build
    npm test
```

### Typings

Typescript definitions are included with the package.

## License

See the `LICENSE` file for license information.
