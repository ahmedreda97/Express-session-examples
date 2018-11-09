const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url=='/'){
      res.write("hello this is main page");
    }
    else if(req.url=='/ahmed'){ 
        res.write('hello this is ahmed page');
    }
    else if(req.url=='/reda'){
        res.write('hello this is reda page');
    }

//res.end();
});

server.listen(3000,()=>{
console.log('server started on port 3000');
});