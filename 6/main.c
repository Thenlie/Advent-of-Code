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

    int *queue = malloc(sizeof(int) * 4);

    queue[0] = fgetc(f);
    queue[1] = fgetc(f);
    queue[2] = fgetc(f);
    queue[3] = fgetc(f);

    if (check_queue(queue) == 0) {
        printf("Answer: 4\n");
        fclose(f);
        return 0;
    }

    int count = 4;
    
    do {
        count++;
        int c = fgetc(f);
        if (feof(f)) break;

        push_to_queue(c, queue); 
        if (check_queue(queue) == 0) {
            printf("Answer: %i\n", count);
            break;
        }
    } while (1); 

    fclose(f);
    return 0;
}

void push_to_queue(int c, int *queue) {
    queue[0] = queue[1];
    queue[1] = queue[2];
    queue[2] = queue[3];
    queue[3] = c;
}

int check_queue(int *queue) {
    if (
        queue[0] != queue[1] &&
        queue[0] != queue[2] &&
        queue[0] != queue[3] &&
        queue[1] != queue[2] &&
        queue[1] != queue[3] &&
        queue[2] != queue[3]
    ) {
        printf("%c%c%c%c\n", queue[0], queue[1], queue[2], queue[3]);
        return 0;
    } else {
        return 1;
    }
}
