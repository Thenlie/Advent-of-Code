#!/bin/bash

mkdir "$1"
cd "$1"
touch main.c build.sh
echo $'#!/bin/bash\n\nclang -Wall -Wextra -Wpedantic -Werror -Wshadow -Wformat=2 -Wconversion -Wunused-parameter main.c -o main' > build.sh
chmod +x ./build.sh
echo $'#include <stdio.h>\n\nint main (void) {\n    printf("Setup complete!\\n");\n    return 0;\n}\n' > main.c
./build.sh
./main

