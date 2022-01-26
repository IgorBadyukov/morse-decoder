const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let str = '';
    let i = 0;
    while (i < expr.length) {
      let fff = expr.slice(i, i+10);
      let sss = '';
      for (let j = 0; j < 10; j+=2) {
        if(fff[j] ==='*') {
          str+=' ';
          break;
        }
        else if(fff[j] ==='1' && fff[j+1] ==='0') {
          sss+='.';
        }
        else if(fff[j] ==='1' && fff[j+1] ==='1') {
          sss+='-';
        }
      }
      for (let item in MORSE_TABLE) {
        if(item === sss) {
          str+=MORSE_TABLE[item];
        }
      }
      i+=10;
    }
    return str;
}

module.exports = {
    decode
};