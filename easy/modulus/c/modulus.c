#include <stdio.h>

/*
	Given two integers N and M, calculate N Mod M (without using any inbuilt modulus operator).
*/

int main(int argc, char **argv) {
	FILE *data = fopen(argv[1], "r");
	int n, m;

	// Grab N and M from the input.
	while(EOF != fscanf(data, "%d,%d\n", &n, &m)) {
		// Remove M from N until less than M remains.
		while (n >= m) {
			n -= m;
		}
		// Output the remainder.
		printf("%d\n", n);
	}

	// Clean up.
	fclose(f);
	
	return 0;
}