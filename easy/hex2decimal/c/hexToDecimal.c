#include <stdio.h>

int main(int argc, char **argv)
{
	char hex[256];
	FILE *fp = fopen(argv[1], "r");
	while (EOF != fscanf(fp, "%s", hex)) 
	{
		long long decimal = 0;
		for(char *hp = hex; *hp != '\0'; hp++) 
		{
			int digit = *hp - '0';
			if (digit > 9) {
				digit = digit + '0' - 'a' + 10;
			}
			decimal = decimal * 16 + digit;
		}
		printf("%lld\n", decimal);
	}
}