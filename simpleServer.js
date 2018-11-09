const http=require('http');

const server=http.createServer((req,res)=>{
    
    res.statusCode=404;
    res.setHeader('content-type','text/plain');
    res.end('hello world');
});


server.listen(3000,()=>{
console.log('server started on port 3000');
});