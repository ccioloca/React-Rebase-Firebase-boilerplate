# React Re-base Firebase Boilerplate

A starting point for Firebase Web apps

## Installation

npm install yarn -g

yarn start -> start the dev server
yarn test -> start the Jest tests
yarn watch -> watches the scss files
yarn magic -> run all three commands above in seperate tabs
yarn build -> build a production ready file

## Usage

The aim of this repository is the following (But it's a Work in Progress):

1) All authentication redirects should be done at the routes.js level
2) Pages should be stateless function components that have only Grid, Cell & Container components
3) Containers should adhere to [this definition of container components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.w8t47qq2a)
4) Components should be presentational, and where possible stateless function components

## Main Features

* Bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)
* [react](https://github.com/facebook/react)
* [firebase](https://www.npmjs.com/package/firebase)
* [re-base](https://github.com/tylermcginnis/re-base)
* [react-router](https://github.com/rackt/react-router)
* [dialog-size](https://github.com/meodai/dialog-size)
* [bonescss](https://github.com/meodai/bonescss)
* [sensible](https://github.com/meodai/sensible)
* [jsxstyle](https://github.com/smyte/jsxstyle)
* [moment](https://github.com/moment/moment)

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request :D

## Credits

* [haluvibe](https://github.com/haluvibe)
* [qwales1](https://github.com/qwales1)

## License

The MIT License (MIT)

Copyright (c) 2016 haluvibe

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
