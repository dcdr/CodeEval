#include <fstream>

using namespace std;

int main(int argc, char **argv) {
	ifstream *data = new ifstream(argv[1], ifstream::in);
	char buffer[1024];

	while(ios::eof != data->getline(buffer, 1024)) {
		char *customers;
	}

}