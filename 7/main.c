#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct directory {
    char *name;
    int size;
} directory;

void pop(void);
void push(directory dir);

char stack[500][25];
int stack_len = 0;
directory totals[500];

int main (void) {
    FILE *f = fopen("short-input.txt", "r");
    if (f == NULL) {
        perror("Unable to open file!");
        return 1;
    }

    char *buf = malloc(sizeof(char) * 64);
    strcpy(stack[0], "/");

    while (fgets(buf, 64, f)) {
        if (buf[0] == '$') {
            if (buf[2] == 'c') {
                printf("cd\n");
                // alter stack    
                if (buf[5] == '.') {
                    printf("pop\n");
                    // pop
                    pop();
                } else if (buf[5] == '/') {
                    // set stack to root
                    continue;
                } else {
                    printf("push\n");
                    // push
                    char *name = malloc(sizeof(char) * 25);
                    for (int i = 5; buf[i]; i++) {
                        if (buf[i] != '\n') name[i-5] = buf[i];
                    }
                    stack_len++;
                    strcpy(stack[stack_len], name);
                    free(name);
                }
            } else if (buf[2] == 'l') {
                // add to totals
                printf("ls\n");
            }
        } else {
            continue;
        }
        
        // print stack
        for (int i = 0; stack[i]; i++) {
            printf("hit %s\n", stack[i]);
        }
    }

    free(buf);
    fclose(f);

    return 0;
}

void pop(void) {
    strncpy(stack[stack_len], "NULL\0", 5);
    stack_len--;
}

void push(directory dir) {
    stack_len++;
    strcpy(stack[stack_len], dir.name);
}

// create strcut of string and int to track each dir
// create stack to track nested directories
// create array capable of storing name and size of every dir
// read each line of file
// when .. pop from stack
// when abc push to stack
// when / set stack to 0
// on ls loop through stack and add to totals array
