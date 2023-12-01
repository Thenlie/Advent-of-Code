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
    int two = 0;
    int three = 0;

    while(fgets(buf, 64, f)) {
        if (strcmp(buf, "\n") == 0) {
            if (elf_count > max) {
                three = two;
                two = max;
                max = elf_count;
            } else if (elf_count > two) {
                three = two;
                two = elf_count;
            } else if (elf_count > three) {
                three = elf_count;
            }
            elf_count = 0;
        }
        int x = atoi(buf);
        elf_count += x;
    }
    printf("max: %i, 2: %i, 3: %i\n", max, two, three);
    printf("total: %i\n", max + two + three);

    fclose(f);
    return 0;
}
