#include <stdio.h>

int main(int argc, char **argv) {
	FILE *f = fopen(argv[1], "r");
	char line[1024];

	while (fgets(line, 1024, f)) {
    // Skip empty lines
    if (line[0] == '\n') {
        continue;
    }

		unsigned int number, scan = 0x8000;
		unsigned char foundFirstBit = 0;
		sscanf(line, "%d", &number);

		while (scan > 0) {
			if (number & scan) {
				printf("1");
				foundFirstBit = 1;
			}
			else if (foundFirstBit) {
				printf("0");
			}
			scan >>= 1;
		}
		if (!foundFirstBit) {
			printf("0");
		}

		printf("\n");
  }

  return 0;
}
