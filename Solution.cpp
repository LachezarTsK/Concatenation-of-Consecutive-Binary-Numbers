
using namespace std;

class Solution {
    
    inline static const int MODULO = pow(10, 9) + 7;

public:
    int concatenatedBinary(int input) {
        long long resultOfConcatenation = 0;
        int bitsShiftLeft = 0;

        for (int i = 1; i <= input; ++i) {
            bitsShiftLeft += (i & (i - 1)) == 0 ? 1 : 0;
            resultOfConcatenation = ((resultOfConcatenation <<= bitsShiftLeft) + i) % MODULO;
        }
        return resultOfConcatenation;

    }
};
