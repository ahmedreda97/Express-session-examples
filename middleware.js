const express=require('express');
const app=express();

app.use((req,res,next)=>{
    if(req.method=='POST'){
      res.end("POST requests not allowed");
    }
    else{
        req.message="       this message is coming from the middleware";
        console.log('middleware executed');
         next();


    }
  
});

app.get('/page1', (req, res) => {
    res.send('Hello from page 1 '+ req.message);
    res.end();
});
app.get('/page2', (req, res) => {
    res.send('Hello from page 2'+ req.message);
    res.end();
});





app.listen(3000,()=>{
console.log('server opened on port 3000');
});