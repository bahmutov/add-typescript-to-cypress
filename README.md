# @bahmutov/add-typescript-to-cypress

> Quickly adds TypeScript spec support to Cypress

[![NPM][npm-icon] ][npm-url]

[![Build status][ci-image] ][ci-url]
[![semantic-release][semantic-image] ][semantic-url]
[![js-standard-style][standard-image]][standard-url]
[![renovate-app badge][renovate-badge]][renovate-app]

## Why

[Cypress](https://www.cypress.io/) is awesome, but does not come with TypeScript support right out of the box. Instead you need to install either [Cypress webpack preprocessor](https://github.com/cypress-io/cypress-webpack-preprocessor) or [Cypress browserify preprocessor](https://github.com/cypress-io/cypress-browserify-preprocessor) and configure them to [transpile TypeScript spec files](https://github.com/cypress-io/cypress-example-recipes/tree/master/examples/preprocessors__typescript-webpack).

Which is too much hustle. With this module you just need to execute regular `npm install` command and you can write TypeScript spec files right away.

**note** overwrites existing `cypress/plugins/index.js` file once. In other installs looks for file `cypress/plugins/cy-ts-preprocessor.js` to avoid overwriting.

## Install

After install Cypress (version 1.x) and opening it once to scaffold the projects:

```sh
npm install --save-dev @bahmutov/add-typescript-to-cypress
```

This should create [cypress/plugins/index.js](src/plugin.js) that uses `webpack` preprocessor and `ts-loader` to transpile `.ts` files.

**note** this module does NOT install TypeScript module, but lists it as a `peerDependency`. If your project does not have `typescript` yet, install it with `npm i -D typescript`.

**note** if there is no root `tsconfig.json`, empty file will be created, otherwise `ts-loader` crashes.

## Use

Just start writing `*.ts` spec and supporting files and it should work. If the types are still not found, add to the top of the spec file the following line

```
/// <reference types="Cypress" />
```

See [this in action](https://www.youtube.com/watch?v=hxlrJAAeFeM&feature=youtu.be)

## Debug

Install this package with environment variable `DEBUG=add-typescript-to-cypress`

## Eject

If you want to uninstall this module after installing it once, then you need to still have the dependencies referenced from [src/cy-ts-preprocessor.js](src/cy-ts-preprocessor.js):

- [@cypress/webpack-preprocessor](https://github.com/cypress-io/cypress-webpack-preprocessor#readme) (and its peer dependencies)
- [ts-loader](https://github.com/TypeStrong/ts-loader) (and its peer dependencies)

You can install them with

```bash
npm i -D @cypress/webpack-preprocessor ts-loader
```

and then uninstall this package.

### Small print

Author: Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt; &copy; 2017

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](https://glebbahmutov.com)
* [blog](https://glebbahmutov.com/blog)

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/add-typescript-to-cypress/issues) on Github

## MIT License

Copyright (c) 2017 Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt;

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[npm-icon]: https://nodei.co/npm/@bahmutov/add-typescript-to-cypress.svg?downloads=true
[npm-url]: https://npmjs.org/package/@bahmutov/add-typescript-to-cypress
[ci-image]: https://travis-ci.org/bahmutov/add-typescript-to-cypress.svg?branch=master
[ci-url]: https://travis-ci.org/bahmutov/add-typescript-to-cypress
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: http://standardjs.com/
[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/
