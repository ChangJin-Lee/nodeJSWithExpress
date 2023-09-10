
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    // console.log('request event');
    // res.end('Hello World')
    const fileStream = fs.createReadStream('./content/big.txt','utf8');
    fileStream.on('open',()=>{
        fileStream.pipe(res);
    })
    fileStream.on('error',(err)=>{
        res.end(err)
    })
})

server.listen(5000, ()=> {
    console.log('Server listening on port : 5000.....');
})