#!/bin/sh
git pull
yarn install
yarn compile-sass
ttab yarn start
ttab yarn test
ttab yarn watch
ttab yarn server
atom .
