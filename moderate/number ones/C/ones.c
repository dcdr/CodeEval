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
		int count = 0;
		sscanf(line, "%d", &number);

		while (scan > 0) {
			if (number & scan) {
				count++;
			}
			scan >>= 1;
		}

		printf("%d\n", count);
  }

  return 0;
}
