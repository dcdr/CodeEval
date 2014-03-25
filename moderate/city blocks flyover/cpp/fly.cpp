#include <iostream>
#include <fstream>
#include <sstream>
#include <iterator>
#include <vector>

void get_parenthesized_lists(std::string src, std::vector<double> &streets, std::vector<double> &avenues)
{
  std::istringstream input(src);

  while (input.peek() == '(' || input.peek() == ' ')
  {
    input.get();
  }

  while (input.peek() != ')')
  {
    double nextNum;
    input >> nextNum;

    streets.push_back(nextNum);
    while (input.peek() == ',' || input.peek() == ' ')
    {
      input.get();
    }
  }

  input.get();

  while (input.peek() == '(' || input.peek() == ' ')
  {
    input.get();
  }

  while (input.peek() != ')')
  {
    double nextNum;
    input >> nextNum;

    avenues.push_back(nextNum);
    while (input.peek() == ',' || input.peek() == ' ')
    {
      input.get();
    }
  }
}

int count_blocks(std::vector<double> &streets, std::vector<double> &avenues)
{
  double slope = streets.back() / avenues.back();
  int last_street = streets.size();
  int last_avenue = avenues.size();
  int s = 1;
  int a = 1;
  int blocks = 0;

  while (s != last_street && a != last_avenue)
  {
    int test_street = s;
    int test_avenue = a;
    blocks++;
    if (test_street != last_street && streets[test_street] <= slope * avenues[test_avenue])
    {
      s++;
    }
    if (test_avenue != last_avenue && avenues[test_avenue] <= streets[test_street] / slope)
    {
      a++;
    }
  }
  return blocks;
}
 

int main (int argc, char* argv[]) 
{
  std::ifstream infile(argv[1]);
  std::string line;

  while (std::getline(infile, line)) {
    if (line.length() == 0)
      continue; //ignore all empty lines
    else 
    {
      std::vector<double> streets; 
      std::vector<double> avenues;
      int blocks;

      get_parenthesized_lists(line, streets, avenues);
      blocks = count_blocks(streets, avenues);

      printf("%d\n", blocks);
    }
  }
}