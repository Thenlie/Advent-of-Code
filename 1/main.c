#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(void) {
    FILE *f = fopen("calories.txt", "r");
    if (f == NULL) {
        perror("Unable to read file!");
    } 

    char buf[64];
    int elf_count = 0;
    int max = 0;

    while(fgets(buf, 64, f)) {
        if (strcmp(buf, "\n") == 0) {
            if (elf_count > max) {
                max = elf_count;
            }
            printf("%i\n", elf_count);
            elf_count = 0;
        }
        int x = atoi(buf);
        elf_count += x;
    }
    printf("max: %i\n", max);
    return 0;
}
