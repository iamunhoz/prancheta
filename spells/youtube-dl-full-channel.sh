#!/bin/bash

if [ $# -ne 0 ]; then
  URL="$1"
  youtube-dl -ciw -o "%(title)s.%(ext)s" -v -x --audio-quality 0 $URL
else
  echo "An argument representing a youtube channel is needed"
fi
