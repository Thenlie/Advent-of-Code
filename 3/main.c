#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

int main (void) {
    FILE *f = fopen("input.txt", "r");
    if (f == NULL) {
        perror("Could not open file");
        return 1;
    }  

    char *buf = malloc(128);
    int count = 0;
    while (fgets(buf, 128, f)) {
        printf("%s", buf);
        unsigned long len = strlen(buf);
        unsigned long mid = len / 2;
        bool done = false;
        printf("%lu\n", mid);
        
        for (int i = 0; i < (int)mid; i++) {
            for (int j = (int)mid; j < (int)len; j++) {
                if (buf[i] == buf[j]) {
                    printf("%c\n", buf[i]);
                    if (buf[i] < 91) {
                        count += buf[i] - 38;
                        printf("%i\n", buf[i]-38);
                    }
                    else {
                        count += buf[i] - 96;
                        printf("%i\n", buf[i] - 96);
                    }
                    done = true;
                    printf("%i\n", count);
                    break;
                }
            }
            if (done) break;
        }
    }    

    printf("%i\n", count);
    fclose(f);
    return 0;
}

