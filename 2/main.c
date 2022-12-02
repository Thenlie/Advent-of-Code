#include <stdio.h>
#include <stdbool.h>

int main(void) {
    FILE *f = fopen("strategy.txt", "r");
    if (f == NULL) {
        perror("Unable to read file!");
        return 1;
    }

    bool myTurn = false;
    int opponent_move, my_move;
    int score = 0;

    do {
        int c = fgetc(f);
        if (feof(f)) {
            break;
        }
        if (c == 32) continue;
        if (c == 10) {
            printf("%c, %c\n", opponent_move, my_move);
            switch (opponent_move) {
                // Rock
                case 65:
                    switch (my_move) {
                        // Lose
                        case 88:
                            score += 3;           
                            break;
                        // Draw
                        case 89:
                            score += 4;           
                            break;
                        // Win
                        case 90:
                            score += 8;           
                            break;
                    }
                    break;
                // Paper
                case 66:
                    switch (my_move) {
                        case 88:
                            score += 1;           
                            break;
                        case 89:
                            score += 5;           
                            break;
                        case 90:
                            score += 9;           
                            break;
                    }
                    break;
                // Scissors
                case 67:
                    switch (my_move) {
                        case 88:
                            score += 2;           
                            break;
                        case 89:
                            score += 6;           
                            break;
                        case 90:
                            score += 7;           
                            break;
                    }
                    break;
            }
        } else if (myTurn == false) {
            opponent_move = c; 
            myTurn = true;
        } else {
            my_move = c;
            myTurn = false;
        }
        printf("%c", c);
    } while (1);

    printf("answer: %i\n", score);

    fclose(f);
    return 0;
}
