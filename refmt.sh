#!/bin/bash
for i in $(find src/ -type f -name "*.re")
do
  refmt --in-place $i
done