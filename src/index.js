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
let sentence = '';
let symbol = {
  '10': '.',
  '11': '-'
};

for (let i = 0; i < expr.length; i += 10) {
  let str = expr.substr(i, 10);
  let char = '';

  for (let j = 0; j < str.length; j += 2) {
    let code = str.substr(j, 2);

    if (symbol[code]) {
      char += symbol[code];
    }
  }

  sentence += str === '**********' ? ' ' : MORSE_TABLE[char];
}

return sentence;
}

module.exports = {
  decode
}