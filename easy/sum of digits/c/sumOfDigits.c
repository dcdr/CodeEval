#include <stdio.h>

int main(int argc, char **argv) {
	FILE *data = fopen(argv[1], "r");
	long long sum = 0;
	char c;

	while (EOF != (c = getc(data))) {
		if (c == '\n') {
			printf("%lld\n", sum);
			sum = 0;
			continue;
		}
		sum += c - '0';
	}

	return 0;
}