#include <stdio.h>

int main(int argc, char **argv) {
	int number = 0x0001;
	unsigned char *mem = (unsigned char *)&number;

	printf("%s\n", *mem == 0x1 ? "LittleEndian" : "BigEndian");

	return 0;
}