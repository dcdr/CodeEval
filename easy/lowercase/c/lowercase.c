#include <stdio.h>
#include <stdlib.h>

int main(int argc, char **argv) {
	FILE *data = fopen(argv[1], "r");
	char *line = malloc(1024), *bp, *end;
	size_t length = 1024;
	size_t count;

	while (-1 != (count = getline(&line, &length, data))) {
		for(bp = line, end = line+count; bp < end; bp++) {
			char target = *bp - 'A';
			if (target >= 0 && target <= 'Z' - 'A') {
				*bp +=  'a' - 'A';
			}
		}
		printf("%*s",  (int)count, line);
	}
	free(line);

	return 0;
}