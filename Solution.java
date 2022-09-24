
public class Solution {

    private static final int MODULO = (int) Math.pow(10, 9) + 7;

    public int concatenatedBinary(int input) {
        long resultOfConcatenation = 0;
        int bitsShiftLeft = 0;

        for (int i = 1; i <= input; ++i) {
            bitsShiftLeft += (i & (i - 1)) == 0 ? 1 : 0;
            resultOfConcatenation = ((resultOfConcatenation << bitsShiftLeft) + i) % MODULO;
        }
        return (int) resultOfConcatenation;
    }
}
