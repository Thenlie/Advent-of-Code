#include <stdio.h>
#include <stdlib.h>

void push_to_queue(int c, int *queue);
int check_queue(int *queue);

int main (void) {
    FILE *f = fopen("input.txt", "r");
    if (f == NULL) {
        perror("Unable to read file!");
        return 1;
    } 

    int *queue = malloc(sizeof(int) * 14);
    int count = 0;
    
    do {
        int c = fgetc(f);
        if (feof(f)) break;

        if (count < 14) {
            queue[count] = c;            
            count++;
        } else {
            push_to_queue(c, queue); 
            if (check_queue(queue) == 0) {
                printf("Answer: %i\n", count + 1);
                break;
            }
            count++;
        }
    } while (1); 

    free(queue);
    fclose(f);
    return 0;
}

void push_to_queue(int c, int *queue) {
    for (int i = 0; i < 14; i++) { 
        if (i == 13) {
            queue[i] = c;
        } else {
            queue[i] = queue[i+1];
        }
    }
}

int check_queue(int *queue) {
    int abc[52] = {0};

    for (int i = 0; i < 14; i++) {
        abc[queue[i] - 97]++;
        if (abc[queue[i] - 97] > 1) {
            return 1;
        }
    }
    return 0;
}
