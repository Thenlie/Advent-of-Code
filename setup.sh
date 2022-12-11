#!/bin/bash

# Verfiy command line argument
if [[ ! $1 ]]; then
    echo "Error: missing argument! Usage: './setup.sh <day>'"
    exit 1
fi

# Create new directory and files
mkdir "$1"
cd "$1"
touch main.c build.sh input.txt

# Write boilerplate to files, run first build
echo $'#!/bin/bash\n\nclang -Wall -Wextra -Wpedantic -Werror -Wshadow -Wformat=2 -Wconversion -Wunused-parameter main.c -o main' > build.sh
chmod +x ./build.sh
echo $'#include <stdio.h>\n\nint main (void) {\n    printf("Setup complete!\\n");\n    return 0;\n}\n' > main.c
./build.sh
./main

