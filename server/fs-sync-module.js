const {readFileSync, writeFileSync} = require('fs'); 
const fs = require('fs'); 
console.log('start');
const first = fs.readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

// flag는 우리가 알고 있는 이어붙이기 새로 쓰기  그거임.
writeFileSync('./content/first-write.txt',
 `Here is the result ${first} \n${second}`,
  { flag: 'a'}
  )

console.log('done with this task');
console.log('starting the next one');