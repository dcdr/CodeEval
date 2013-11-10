#include <stdio.h>
#include <regex.h>

int main(int argc, char **argv) {
	FILE *data = fopen(argv[1], "r");
	char candidate[256];

// (\"(\\\"|\\\\|[][] (),:;<>@)*\"|
	
	regex_t compiled;
	int result = regcomp(&compiled, "^[a-zA-Z0-9!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9.]+$", REG_EXTENDED|REG_NOSUB);
	if (0 != result) {
		size_t error_len = 1024;
		char error[error_len];
		regerror(result, &compiled, error, error_len);
		printf("Error: %s\n", error);
		return -1;
	}

	while(EOF != fscanf(data, "%s\n", candidate)) {
		size_t num_matches;
		regmatch_t matches;

		result = regexec(&compiled, candidate, num_matches, &matches, 0);
		printf("%s\n", 0 == result ? "true" : "false");
	}

	regfree(&compiled);

}


