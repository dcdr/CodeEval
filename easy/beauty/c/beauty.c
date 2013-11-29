#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#define LINE_SIZE 1024
/*
	Credits: This problem appeared in the Facebook Hacker Cup 2013 Hackathon. 

	When John was a little kid he didn't have much to do. There was no internet, 
	no Facebook, and no programs to hack on. So he did the only thing he could... 
	he evaluated the beauty of strings in a quest to discover the most beautiful 
	string in the world. 

	Given a string s, little Johnny defined the beauty of the string as the sum 
	of the beauty of the letters in it. The beauty of each letter is an integer 
	between 1 and 26, inclusive, and no two letters have the same beauty. Johnny 
	doesn't care about whether letters are uppercase or lowercase, so that doesn't 
	affect the beauty of a letter. (Uppercase 'F' is exactly as beautiful as 
	lowercase 'f', for example.) 

	You're a student writing a report on the youth of this famous hacker. You 
	found the string that Johnny considered most beautiful. What is the maximum 
	possible beauty of this string?
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

    // Read lines from file.
    while (fgets(line, LINE_SIZE, f)) {
        // Remove the trailing '\n'
        if ((p = strchr(line, '\n'))) { *p = '\0'; }

        // Skip empty lines
        if (line[0] == '\0') { continue; }

        // Allocate the character count array.
		int *count = calloc(26, sizeof(int));

		// Count the occurrences of the letters.
		for(char*s = line; '\0' != *s; s++) {
			// Determine if the next character in the string is
			// a letter. Find it's index in the sequence a-z.
			int index = *s - 'A';
			// If out of range, perhaps it's a lower case letter.
			if (!(0 <= index && index < 26)) {
				index += 'A' - 'a';
			}
			// If in range, count it, otherwise skip it.
			if (0 <= index && index < 26) {
				count[index]++;
			}
		}

		// Sort by occurrence.
		int indices[26];
		for (int letter=0; letter < 26; letter++) {
			// Find where letter's occurrence ranks.
			int i;
			for (i=0; i < letter; i++) {
				if (count[letter] > count[indices[i]]) break;
			}
			// Insert letter's index.
			for(int j=letter; i<j; j--) {
				indices[j] = indices[j-1];
			}
			indices[i] = letter;
		}

		// Calculate the beauty.
		int beauty = 0;
		int multiplier = 26;
		for (int i=0; i<26; i++) {
			beauty += multiplier-- * count[indices[i]];
		}

		// Output the beauty.
		printf("%d\n", beauty);

		// Clean up.
		free(count);
    }

    // Paranoid check
    if (ferror(f)) {
        perror("I/O Error");
    }

    // Clean up.
    fclose(f);
    return 0;
}
