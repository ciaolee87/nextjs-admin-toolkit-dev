#!/bin/zsh

pnpm up
rm -rf "./dist"
mkdir ./dist
cp ./module.d.ts ./dist/
# todo scss, asset 등 복사하지 않고 참조 하는 방법에 대해서 고민해보기

pnpm tailwindcss -o ./asset/scss/tailwind.css;
tsc -p tsconfig.export.json;
tsc-alias -p tsconfig.export.json;
git add .;