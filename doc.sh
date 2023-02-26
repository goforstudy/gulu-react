#!/bin/env bash
yarn doc
git checkout gr-pages
mv -f doc/* ./
git add .
git commit -m "update"
git push
git checkout -