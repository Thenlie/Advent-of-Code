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
    char *two = malloc(128);
    char *three = malloc(128);
    int count = 0;
    int total = 0;

    while (fgets(buf, 128, f)) {
        if (count != 2) {
            if (count == 0) {
                strcpy(two, buf);
                count++;
            } else {
                strcpy(three, buf);
                count++;
            } 
        } else {
            unsigned long len1 = strlen(buf);
            unsigned long len2 = strlen(two);
            unsigned long len3 = strlen(three);
            bool done = false;
            printf("%s%s%s\n", buf, two, three);
            
            for (int i = 0; i < (int)len1; i++) {
                for (int j = 0; j < (int)len2; j++) {
                    for (int k = 0; k < (int)len3; k++) {
                        if (buf[i] == two[j] && buf[i] == three[k] && two[j] == three[k]) {
                            printf("%c\n", buf[i]);
                            if (buf[i] < 91) {
                                total += buf[i] - 38;
  //                              printf("%i\n", buf[i]-38);
                            }
                            else {
                                total += buf[i] - 96;
   //                             printf("%i\n", buf[i] - 96);
                            }
                            done = true;
    //                        printf("%i\n", total);
                            break;
                        }
                    }
                    if (done) break;
                }
                if (done) break;
            }
            count = 0;
        }
    }    

    printf("%i\n", total);
    fclose(f);
    return 0;
}

