#!/bin/bash

# Verfiy command line argument
if [ "$#" -ne 2 ] 
then
    echo "Error: missing argument! Usage: './setup.js.sh <year> <day>'"
    exit 1
fi

# Create new directory and files
mkdir -p "$1"
cd "$1"
mkdir "$2"
cd "$2"
touch index.js input.txt

# Write boilerplate to files
echo $'const fs = require(\'fs\');
const data = fs.readFileSync(\'input.txt\', \'utf8\');
const lines = data.split(\'\\n\');
const words = data.split(\' \');
const chars = data.split(\'\');

for (let i = 0; i < words.length; i++) {

}' > index.js
