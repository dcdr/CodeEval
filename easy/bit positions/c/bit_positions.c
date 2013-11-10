#include <stdio.h>

int main(int argc, char **argv)
{
	FILE *fp = fopen(argv[1], "r");
	long long num, p1, p2;
	while (EOF != fscanf(fp, "%lld,%lld,%lld", &num, &p1, &p2))
	{
		long long b1 = 1 << p1-1;
		long long b2 = 1 << p2-1;

		printf("num: %lld, b1: %lld, b2: %lld, num&b1: %lld, num&b2: %lld\n", num, b1, b2, num&b1, num&b2);

		printf("%s\n", (0 == num & b1) && (0 == num & b2) ? "true" : "false");
	}
}