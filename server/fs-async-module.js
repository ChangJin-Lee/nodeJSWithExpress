const {readFile, writeFile} = require('fs'); 

// 콜백을 제공할거에요~
// utf8 안써주면 버퍼가 나와여 
// <Buffer 68 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 66 69 72 73 74 20 66 69 6c 65>
// 순간에 이미 offload됨.
console.log('start');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err){
        console.log(err)
        return 
    }
    const first = result
    console.log(result)
    readFile('./content/second.txt','utf8', (err, result)=>{
        if (err){
            console.log(err)
            return 
        }
        const second = result
        writeFile(
        './content/result-async.txt',
        `Here is the result ${first} \n${second}`,
         (err,result) =>{
            if(err){
                console.log(err);
                return
            }
            console.log(result);
            console.log('done with this task');
        })
    })
})

console.log('starting next task');