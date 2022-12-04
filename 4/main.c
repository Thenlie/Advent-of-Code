#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main (void) {
    FILE *f = fopen("input.txt", "r");
    if (f == NULL) {
        perror("Unable to open file!");
        return 1;
    } 

    char *buf = malloc(sizeof(char) * 12);
    int total = 0;
    
    while (fgets(buf, 12, f)) {
        printf("%s\n", buf);

        // get 4 ints from string
        int count = 0;
        int digit_count = 0;
        int arr[4] = {0};
        for (int i = 0; i < (int)strlen(buf); i++) {
//            printf("char: %i  count: %i  arr: %i\n", buf[i], count, arr[count]);
            if (buf[i] == 10) break;
            if (buf[i] == 45 || buf[i] == 44) {
                count++;
                digit_count = 0;
                continue;    
            } else {
                if (digit_count == 0) {
                    arr[count] = buf[i] - 48;
                    digit_count++;
                } else {
                    arr[count] *= 10;
                    arr[count] += buf[i] - 48;
                }
            }
        }
        
        // verify contents of array
        if (count == 3) {
            for (int j = 0; j < 4; j++) {
                printf("%i ", arr[j]);
            }
            printf("\n");

            // compare 1-3
            if (arr[0] <= arr[2] && arr[1] >= arr[3]) {
                total++;
                continue;
            }        
            // compare 2-4
            if (arr[0] >= arr[2] && arr[1] <= arr[3]) {
                total++;
                continue;
            }
        }
    }

    printf("Total: %i\n", total);

    free(buf);
    fclose(f);
    return 0;
}

