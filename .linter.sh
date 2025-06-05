#!/bin/bash
cd /home/kavia/workspace/code-generation/speechconnect-kids-100970-e024a6a9/speechconnect_kids
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

