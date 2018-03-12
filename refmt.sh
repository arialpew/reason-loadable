#!/bin/bash
for i in $(find . -not -path "*node_modules*" -type f \( -name "*.re" -o -name "*.rei" \))
do
  refmt --in-place $i
done