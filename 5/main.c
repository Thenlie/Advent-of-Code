#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define STACK_MAX 64

void move_containers(int from, int to, int n);
void print_stack();

// Provided initial stack
char stack[9][STACK_MAX] = {
    { 'W', 'D', 'G', 'B', 'H', 'R', 'V' },
    { 'J', 'N', 'G', 'C', 'R', 'F' },
    { 'L', 'S', 'F', 'H', 'D', 'N', 'J' },
    { 'J', 'D', 'S', 'V' },
    { 'S', 'H', 'D', 'R', 'Q', 'W', 'N', 'V' },
    { 'P', 'G', 'H', 'C', 'M' },
    { 'F', 'J', 'B', 'G', 'L', 'Z', 'H', 'C' },
    { 'S', 'J', 'R' },
    { 'L', 'G', 'S', 'R', 'B', 'N', 'V', 'M' }
};

int main (void) {
    FILE *f = fopen("input.txt", "r");
    if (f == NULL) {
        perror("Unable to open file!");
        return 1;
    } 

    print_stack();

    char *buf = malloc(sizeof(char) * 25);
    // read input.txt line
    while (fgets(buf, 25, f)) {
        int len = (int)strlen(buf);
        int to, from, n;
        // check if n is 1 or 2 digits
        if (len == 19) {
            to = buf[17] - 48;
            from = buf[12] - 48;
            n = buf[5] - 48;
        } else {
            to = buf[18] - 48;
            from = buf[13] - 48;
            n = (buf[5] - 48) * 10 + (buf[6] - 48);
        }
        move_containers(from-1, to-1, n);
    }

    print_stack();

    fclose(f);
    return 0;
}

void move_containers(int from, int to, int n) {
    // get sub-array lengths
    int from_len = 0; 
    int to_len = 0;
    for(int i = 0; stack[from][i]; i++) { from_len++; }    
    for(int j = 0; stack[to][j]; j++) { to_len++; }    

    // move containers n times
    for(int i = 0; i < n; i++) {
        stack[to][to_len] = stack[from][from_len-1];
        stack[from][from_len-1] = '\0';
        to_len++;
        from_len--;
    }

    return;
}

void print_stack() {
    //Displaying array elements
    printf("Two Dimensional array elements:\n");
    int i, j;
    for(i=0; i<9; i++) {
        for(j=0; stack[i][j]; j++) {
            printf("%c ", stack[i][j]);
        }
        printf("\n");
    }
    return;
}
