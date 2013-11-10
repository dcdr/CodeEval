#include <stdio.h>
#include <math.h>

int main(int argc, char **argv) {
	FILE *data = fopen(argv[1], "r");

	int testCases;

	fscanf(data, "%d\n", &testCases);
	while (testCases-- > 0) {
		long sum;
		fscanf(data, "%ld\n", &sum);
		// count the pairs of a max and min, such that max^2 + min^2 == sum
		int count = 0;
		int max = (int)sqrt(sum);
		int min = (int)sqrt(sum - max*max);

		while (max >= min) {
			if (sum == min*min + max*max) {
				count++;
			}
			max--;
			min = (int)sqrt(sum - max*max);
		}
		printf("%d\n", count);
	}
}