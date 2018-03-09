#!/bin/bash
for i in $(find src/ __tests__/ -type f \( -name "*.re" -o -name "*.rei" \))
do
  refmt --in-place $i
done