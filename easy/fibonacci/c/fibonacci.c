#include <stdio.h>

int main(int argc, char **argv) {
	FILE *data = fopen(argv[1], "r");
	long long fib[65535];
	short last = 0;
	fib[last++] = 0;
	fib[last++] = 1;
	long num;

	while (EOF != fscanf(data, "%ld\n", &num)) {
		while (num >= last) {
			fib[last] = fib[last-2] + fib[last-1];
			last++;
		}
		printf("%lld\n", fib[num]);
	}

	return 0;
}
