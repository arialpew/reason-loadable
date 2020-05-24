#!/bin/bash
for i in $(find . -not -path "*node_modules*" -type f \( -name "*.re" -o -name "*.rei" \))
do
  ./node_modules/.bin/bsrefmt --in-place $i
done