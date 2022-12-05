#include <stdio.h>
#define STACK_MAX 64

void move_containers(int from, int to, int n);

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

    move_containers(0, 7, 2);

    //Displaying array elements
    printf("Two Dimensional array elements:\n");
    int i, j;
    for(i=0; i<9; i++) {
        for(j=0; stack[i][j]; j++) {
            printf("%c ", stack[i][j]);
        }
        printf("\n");
    }

    // loop through inner array once to get length
    // remove from top of specified stack
    // place on top of a different stack
    // repeat n times

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
