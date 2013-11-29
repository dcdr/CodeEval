#include <stdio.h>

/*
	Print the size of a file in bytes.
*/
int main(int argc, char **argv) {
	FILE *fp = fopen(argv[1], "r");

	long count = 0;

	// Count each character.
	while(EOF != fgetc(fp)) {
		count++;
	}

	// Output the file size.
	printf("%ld\n", count);

	// Clean up.
	fclose(fp);

	return 0;
}