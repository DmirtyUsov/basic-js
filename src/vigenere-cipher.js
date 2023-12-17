const { NotImplementedError } = require('../extensions/index.js');

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
  isDirect;
  startAlphabet = 65; // Letter A

  constructor(isDirect=true) {
    this.isDirect = isDirect;
  }
  encrypt(message, key) {
    if(!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const chars = message.toUpperCase().split('');
    let encryptedMessage = '';
    const newChars = this.shift(chars, key);
    if(this.isDirect)
    {
      encryptedMessage = newChars.join('');
    } else {
      encryptedMessage = newChars.reverse().join('');
    }
    return encryptedMessage;
  }
  decrypt(encryptedMessage, key) {
    if(!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }
    const chars = encryptedMessage.toUpperCase().split('');
    let message = '';
    const newChars = this.shift(chars, key, false);
    if(this.isDirect) {
      message = newChars.join('');
    } else {
      message = newChars.reverse().join('');
    }
    return message;
  }

  createShifts(key) {
    return key
      .toUpperCase()
      .split('')
      .map(char => char.charCodeAt(0) - this.startAlphabet);
  }
  shift(chars, key, encrypt=true) {
    const totalLetters = 26;
    const shifts = this.createShifts(key);
    let shiftDirection = encrypt ? 1 : -1;
    let idxCorrection = 0;
    return chars
      .map((char,idx) => {
        let newCharCode = -1;
        const shiftIndex = (idx + idxCorrection) % shifts.length;
        const charCode = char.charCodeAt(0) - this.startAlphabet;
        if(charCode > -1 && charCode < totalLetters){
          newCharCode = (totalLetters + charCode + shifts[shiftIndex]*shiftDirection) % totalLetters;
        }
        else {
          newCharCode = charCode;
          idxCorrection += -1;
        }
        return String.fromCharCode(newCharCode + this.startAlphabet);
      })
  }
}

module.exports = {
  VigenereCipheringMachine
};
