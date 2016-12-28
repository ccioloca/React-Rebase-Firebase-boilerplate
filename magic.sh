#!/bin/sh
git pull
yarn install
yarn compile-sass
ttab yarn watch
ttab yarn server
atom .
yarn start
