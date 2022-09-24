
/**
 * @param {number} input
 * @return {number}
 */
var concatenatedBinary = function (input) {
    const MODULO = Math.pow(10, 9) + 7;
    let resultOfConcatenation = 0;
    let bitsShiftLeft = 1;

    for (let i = 1; i <= input; ++i) {

        /*
         bitsShiftLeft += (i & (i - 1)) == 0 ? 1 : 0;
         resultOfConcatenation = ((resultOfConcatenation << bitsShiftLeft) + i) % MODULO; 
         
         This will not work for JavaScript without applying BigInt.
         In JavaScript, bitwise operators convert their operands to 32-bit integers
         and with large enough input it will cause overflow. 
         This is not the case with arithmetic operators.       
         */
        if ((i & (i - 1)) === 0) {
            bitsShiftLeft <<= 1;
        }
        resultOfConcatenation = ((resultOfConcatenation * bitsShiftLeft) + i) % MODULO;
    }
    return  resultOfConcatenation;
};
