const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    return this._process(message, key, 1);
  }

  decrypt(message, key) {
    return this._process(message, key, -1);
  }

  _process(message, key, direction) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    const text = message.toUpperCase();
    const keyUp = key.toUpperCase();
    const A = 65;
    let keyIndex = 0;
    let result = '';

    for (const ch of text) {
      if (ch >= 'A' && ch <= 'Z') {
        const shift = keyUp.charCodeAt(keyIndex % keyUp.length) - A;
        const code = ch.charCodeAt(0) - A;
        const out = (code + direction * shift + 26) % 26;
        result += String.fromCharCode(out + A);
        keyIndex++;
      } else {
        result += ch;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
