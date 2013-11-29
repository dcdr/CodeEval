#include <stdio.h>
#include <string.h>

#define LINE_SIZE 1024

/*
    You are given a string 'S' and a character 't'. Print out the position of 
    the rightmost occurrence of 't' (case matters) in 'S' or -1 if there is none. 
    The position to be printed out is zero based.
*/

int main(int argc, char **argv)
{
    FILE *f;
    char line[LINE_SIZE], *p;

    // Open file passed as argument
    if (argc < 2 || !(f = fopen(argv[1], "r"))) {
        fprintf(stderr, "Unable to open file argument\n");
        return 1;
    }

    // Read lines from file
    while (fgets(line, LINE_SIZE, f)) {
        // Remove the trailing '\n'
        if ((p = strchr(line, '\n'))) { *p = '\0'; }

        // Skip empty lines
        if (line[0] == '\0') { continue; }

        // Find the comma to deliminate the target string and character.
        char *comma = strchr(line, ',');
        if (NULL == comma) continue;
        
        char c = *(comma+1);            // Grab the character to search for.
        for(p=comma-1; p >= line; p--) { // Work backwards from the end of the target string.
            if (c == *p) break;         // Stop on a match.
        }
        // Output the position.
        printf("%ld\n", p-line);
    }

    // Paranoid check.
    if (ferror(f)) {
        perror("I/O Error");
    }

    // Clean up.
    fclose(f);
    return 0;
}