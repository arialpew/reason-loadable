#!/bin/bash
for i in $(find src/ __tests__/ -type f -name "*.re")
do
  refmt --in-place $i
done