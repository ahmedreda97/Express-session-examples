const http=require('http');
const fs=require('fs');

fs.readFile(__dirname+'/index.html',(err,file)=>{
    const server=http.createServer((req,res)=>{
        res.statusCode=200;
        res.setHeader('content-type','text/plain');
        res.end(file);
    });

    server.listen(3000,()=>{
        console.log('server started on port 3000');
        });

});


