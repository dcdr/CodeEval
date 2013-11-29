int main (int argc, char* argv[]) 
{
    std::ifstream infile(argv[1]);
    std::string line;

    while (std::getline(infile, line)) {
       if (line.length() == 0)
           continue; //ignore all empty lines
       else 
       {
           //do something here
       }
    }
}