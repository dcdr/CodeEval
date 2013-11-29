#include <stdio.h>
#include <math.h>
#include <string.h>

/*
	An Armstrong number is an n-digit number that is equal to the sum of
	the n'th powers of its digits. Determine if the input numbers are Armstrong numbers.
*/

int main(int argc, char **argv) {
	FILE *data = fopen(argv[1], "r");
	char number[12];

	// Read a line, one test number per line, number read as a string.
	while(EOF != fscanf(data, "%s\n", number)) {
		int length = strlen(number);
		char *np = number;		// The current digit in the number to examine.
		int sum = 0;			// The running sum of the n'th powers.
		int integer = 0;		// The integer value of the test data.

		// Iterate over the digits in the number.
		while('\0' != *np) {
			// Get the numerical value of the digit.
			int digit = *np++ - '0';
			// Add the digit's n'th power to the running sum.
			sum += (int) pow(digit, length);
			// Compute the numeric value of the test data.
			integer = integer*10 + digit;
		}

		// Output "True" if the test data is an Armstong number, "False" otherwise.
		printf("%s\n", sum == integer ? "True" : "False");
	}

	// Clean up.
	fclose(data);
	return 0;
}