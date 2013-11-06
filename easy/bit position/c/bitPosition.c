#include <stdio.h>

int main(int argc, char **argv) {
	FILE *data = fopen(argv[1], "r");
	long long num, p1, p2;

	while(EOF != fscanf(data, "%lld,%lld,%lld\n", &num, &p1, &p2)) {
		printf("%s\n", (0 == (num & (1 << (p1-1)))) == (0 == (num & (1 << (p2-1)))) ? "true" : "false");
	}

	return 0;
}