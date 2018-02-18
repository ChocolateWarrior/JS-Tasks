const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const alphArr = alphabet.split('');
let cipher = [];
// const alphabet = 'abcdefghijklmnopqrstuvwxyz 1234567890-!@#$%^&*(_+)';

rl.question('Enter your phrase to cipher: ', (answer1) => {
  const phrase = answer1;
  console.log('Your phrase is: ' + answer1);

  rl.question('Now enter your key: ', (answer2) => {
    console.log('Your key is: ' + answer2);

    const userKey = answer2;
    const phraseArr = phrase.split('');
    let keyArr = userKey.split('');

    for (let  k = 0; k < phrase.length; k++) {
      let elem = (alphArr.indexOf(phraseArr[k]) + alphArr.indexOf(keyArr[(k) % keyArr.length])) % (alphArr.length);
      cipher.push(alphArr[elem]);
    };

    const userOutput = cipher.join('');
    console.log('Your cipher is: ' + userOutput);
  });
});
