#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#define LINE_SIZE 1024

/*
    There is a board (matrix). Every cell of the board contains one integer, 
    which is 0 initially. 

    The next operations can be applied to the Query Board: 
    SetRow i x: it means that all values in the cells on row "i" have been 
    changed to value "x" after this operation. 
    SetCol j x: it means that all values in the cells on column "j" have 
    been changed to value "x" after this operation. 
    QueryRow i: it means that you should output the sum of values on row "i". 
    QueryCol j: it means that you should output the sum of values on column "j". 

    The board's dimensions are 256x256 
    "i" and "j" are integers from 0 to 255 
    "x" is an integer from 0 to 31 
*/
int main(int argc, char **argv)
{
    FILE *f;
    char line[LINE_SIZE], *p;               // input
    unsigned char matrix[256][256];         // board
    char cmd[16];                           // command to execute
    int ind, val;                           // data
    long long sum;                          // result

    // Initialize the board.
    for (int i=0; i<256; i++) {
        for (int j=0; j<256; j++) {
            matrix[i][j] = 0;
        }
    }

    // Open file passed as argument.
    if (argc < 2 || !(f = fopen(argv[1], "r"))) {
        fprintf(stderr, "Unable to open file argument\n");
        return 1;
    }

    // Read lines from file.
    while (fgets(line, LINE_SIZE, f)) {
        // Remove the trailing '\n'.
        if ((p = strchr(line, '\n'))) { *p = '\0'; }

        // Skip empty lines.
        if (line[0] == '\0') { continue; }

        // Is this a Set command?
        if (0 == strncmp(line, "Set", 3)) {
            // Is this a SetCol command?
            if (0 == strncmp(line+3, "Col", 3)) {
                // Grab column index and value.
                sscanf(line+7, "%d %d", &ind, &val);
                // Set the table column to the value.
                for (int i=0; i<256; i++) {
                    matrix[ind][i] = val;
                }
            // Is this a SetRow command?
            } else if (0 == strncmp(line+3, "Row", 3)) {
                // Grab row index and value.
                sscanf(line+7, "%d %d", &ind, &val);
                // Set the table row to the value.
                for (int i=0; i<256; i++) {
                    matrix[i][ind] = val;
                }
            }
        // Is this a Query command?
        } else if (0 == strncmp(line, "Query", 5)) {
            sum = 0;
            // Is this a QueryCol command?
            if (0 == strncmp(line+5, "Col", 3)) {
                // Grab the column index;
                sscanf(line+9, "%d", &ind);
                // Sum values in the table's columnt.
                for (int i=0; i<256; i++) {
                    sum += matrix[ind][i];
                }
            // Is this a QueryRow command?
            } else if (0 == strncmp(line+5, "Row", 3)) {
                // Grab the row index.
                sscanf(line+9, "%d", &ind);
                // Sum values in the table's row.
                for (int i=0; i<256; i++) {
                    sum += matrix[i][ind];
                }
            }
            // Output the result.
            printf("%lld\n", sum);
        }
    }

    // Paranoid check
    if (ferror(f)) {
        perror("I/O Error");
    }

    // Clean up.
    fclose(f);
    return 0;
}