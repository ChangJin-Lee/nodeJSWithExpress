const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        // res.write('welcome to our home page \n')
        // res.end(`<a href = "/about"> go about</a>`)
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Hello User</h1>');
        res.end('<a href = "/about">Go to About</a>');
    }   
    if(req.url === '/about'){
        res.end(`
    <h1>Oops!</h1>
    <p> mark down.</p>
    <a href="/"> Back home </a>
    `)
    }
})

server.listen(5001)