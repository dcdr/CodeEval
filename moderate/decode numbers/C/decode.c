#include <stdio.h>
#include <string.h>

int main(int argc, char **argv) {
	FILE *f = fopen(argv[1], "r");
	char line[1024];

	while (fgets(line, 1024, f)) {
    // Skip empty lines
    if (line[0] == '\n') {
        continue;
    }
//    printf("%s", line);

    // special cases
    // 11-19 when not 110, 120, 127-129	count++
    // 21-26 when not 210, 220, 227-229	count++
    // 10, 20 nextChar++
    int count = 1;
    char *end = line + strlen(line);
    if (*end == '\n') *end-- = '\0';
    char *nextChar = line;

    while (nextChar < end) {
    	if ((nextChar[0] == '1' && nextChar[1] >= '1' && nextChar[1] <= '9') ||
    			(nextChar[0] == '2' && nextChar[1] >= '1' && nextChar[1] <= '6')) {
    		if (nextChar[2] == '\0' ||
    				(strncmp(nextChar+1, "10", 2) != 0 && 		// 110
		    		 strncmp(nextChar+1, "20", 2) != 0 &&			// 120
  					 strncmp(nextChar+1, "27", 2) != 0 &&			// 127
  					 strncmp(nextChar+1, "28", 2) != 0 &&			// 128
  					 strncmp(nextChar+1, "29", 2) != 0)) {		// 129
		    		count++;
	    	}
  		}
    	nextChar++;
    }
    printf("%d\n", count);
  }

  return 0;
}
