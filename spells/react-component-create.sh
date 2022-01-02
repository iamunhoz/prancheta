#!/bin/bash

if [ $# -ne 0 ]; then
  COMPONENT_NAME="$1"
  mkdir $COMPONENT_NAME
  cd $COMPONENT_NAME
  touch $COMPONENT_NAME".js"
  touch $COMPONENT_NAME".style.js"
  touch $COMPONENT_NAME".test.js"
else
  echo "An argument representing a component name is needed"
fi
