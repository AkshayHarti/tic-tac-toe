#!/bin/sh
if wget --spider http://localhost; then
  echo "Health check passed"
  exit 0
else
  echo "Health check failed"
  exit 1
fi
