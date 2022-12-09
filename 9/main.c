#include <stdio.h>

int main (void) {
    FILE *f = fopen("input.txt", "r");
    if (f == NULL) {
        perror("Unable to open file!");
        return 1;
    }

    printf("Setup complete!\n");
    return 0;
}

