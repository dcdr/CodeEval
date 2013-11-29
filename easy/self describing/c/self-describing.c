#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/*
	A number is a self-describing number when (assuming digit positions are labeled 
	0 to N-1), the digit in each position is equal to the number of times that that 
	digit appears in the number.
*/

int main(int argc, char **argv) {
	FILE *data = fopen(argv[1], "r");
	char number[11];
	int  count[10];

	// get the next number
	while (EOF != fscanf(data, "%s", number)) {
		// Count the digits in each position.
		for(int digit=0; digit < 10; digit++) {
			// Initialize.
			count[digit] = 0;
			// Interate over the string
			char *np = number;
			while ('\0' != *np) {
				// Count the digit in its position.
				if (*np - '0' == digit) {
					count[digit]++;
				}
				np++;
			}
		}
		int failed=0;
		int length=strlen(number);
		// Test that each digit occurred the correct number of times.
		for(int digit=0; digit < length && !failed; digit++) {
			if (count[digit] != (number[digit] - '0')) {
				failed = 1;
				printf("0\n");
			}
		}
		if (!failed) {
			printf("1\n");
		}
	}

	// Clean up.
	fclose(f);
	
	return 0;
}