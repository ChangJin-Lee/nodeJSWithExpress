// npm - global command, comes with node 
// npm --version

// local dependency - use it only in this particular project 
// npm i <packageName>

// global dependency - use it in any project
// npm install -g «packageName>
// sudo install -g <packageName> (mac)

// package.ison - manifest file (stores important info about project/package)'
// manual approach (create package. json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

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