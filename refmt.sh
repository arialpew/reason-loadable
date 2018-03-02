#!/bin/bash
for i in $(ls src/**/*.re*)
do
  refmt --in-place $i
done