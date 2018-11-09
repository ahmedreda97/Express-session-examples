const express=require('express');
const app=express();

const middleware=(req,res,next)=>{
    if(req.method=='POST'){
      res.end("POST requests not allowed");
    }
    else{
        req.message="       this message is coming from the middleware";
        console.log('middleware executed');
        //res.end();
        next();
       
   

    }
  
}

app.use(middleware);


app.get('/page1', (req, res) => {
   console.log("in get");
    res.send('Hello from page 1 '+ req.message);
    
    
});
app.get('/page2', (req, res) => {
    res.send('Hello from page 2'+ req.message);

});





app.listen(3000,()=>{
console.log('server opened on port 3000');
});