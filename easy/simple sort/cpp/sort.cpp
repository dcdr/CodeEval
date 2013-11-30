#include <iostream>
#include <fstream>
#include <sstream>
#include <string>
#include <vector>
#include <iterator>

int main (int argc, char* argv[]) 
{
  std::ifstream infile(argv[1]);
  std::string line;
  std::vector<float> data;

  std::cout.precision(3);
  std::cout.setf( std::ios::fixed, std:: ios::floatfield );

  // Get the next line of data.
  while (std::getline(infile, line)) {
    if (line.length() == 0) continue; // Ignore all empty lines.
    else {
      // Get the set of numbers.
      std::istringstream is( line );
      std::vector<float> numbers( (std::istream_iterator<float>(is)),
                                  std::istream_iterator<float>() );

      // Sort the numbers (bubble sort).
      for (int last = numbers.size(); last > 1; last--) {
        for (int i=0; i < last-1; i++) {
          if (numbers[i] > numbers[i+1]) {
            float swap = numbers[i];
            numbers[i] = numbers[i+1];
            numbers[i+1] = swap;
          }
        }
      }

      // Output the resulting buffer.
      std::string pad("");
      for(std::vector<float>::iterator it = numbers.begin(); it<numbers.end(); ++it) {
        std::cout << pad << *it;
        pad = " ";
      }
      std::cout << "\n";
    }
  }
}