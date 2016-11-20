#!/bin/sh
git pull
yarn install
ttab yarn start
ttab yarn test
ttab yarn watch
yarn compile-sass
atom .
