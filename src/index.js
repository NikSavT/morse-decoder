const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function replaceMorse(str) {
    let newstr = '';
    for (let char of str) {
        char == '.' ? char = '10' : char = '11';
        newstr += char;
    }

    return newstr.padStart(10, '0')
}
function createDigitTable(obj) {
    let newTable = {};
    for (let key in obj) {
        newTable[replaceMorse(key)] = obj[key];
    }

    return newTable;
}
const DIGIT_TABLE = createDigitTable(MORSE_TABLE);

// console.log(DIGIT_TABLE);
function exprToArray10(expr) {
    const arrayExpr = [];
    for (let i = 0; i < expr.length; i += 10) {
        arrayExpr.push(expr.slice(i, i + 10))
    }
    // console.log(arrayExpr);
    return arrayExpr;
}

function decode(expr) {
    // let decodeArray = [];
    let arrayExpr = exprToArray10(expr);
    // console.log(arrayExpr);
    let decodeArray = arrayExpr.map(item => {
        if (item === '**********') {
            return ' ';
        }
        for (let key in DIGIT_TABLE) {
            if (key === item) {
                return DIGIT_TABLE[key];
            }
        }
    })
    return decodeArray.join([]);

}


module.exports = {
    decode
}




console.log(decode("0000101110000011111100101110100010111010000000101000000011100000111110**********00001010100011101110000011111100101111100000000010**********000010101000111011100010101010000011111100001111110010111010"));

decode("00000000100000111010101010111100111011100000001011111110101011111010101010101010");
