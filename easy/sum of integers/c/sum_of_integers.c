#include <stdio.h>

int main(int argc, char **argv) {
	FILE *data = fopen(argv[1], "r");

	long long sum = 0;
	long addend;

	while (EOF != fscanf(data, "%ld\n", &addend)) {
		sum += addend;
	}
	printf("%lld\n", sum);
}