#include <stdio.h>
#include <strings.h>

int main(int argc, char **argv) {
	FILE *f = fopen(argv[1], "r");
	char line[1024];
	while (fgets(line, 1024, f)) {
    // Skip empty lines
    if (line[0] == '\n') {
        continue;
    }

    char *comma = rindex(line, ',');
    if (NULL != comma) {
	    size_t target_length = strlen(comma+1)-1;
	    size_t source_length = (size_t) (comma-line);
	    if (source_length >= target_length && 0 == strncmp(comma-target_length, comma+1, target_length)) {
	    	printf("1\n");
	    	continue;
	    }
    }
  	printf("0\n");
  }

  return 0;
}
