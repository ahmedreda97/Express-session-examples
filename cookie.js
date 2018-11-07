const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');

app.use(cookieParser());

app.post('/',(req,res)=>{
  res.cookie('Rememberme','cookievalue');
  res.end("cookie set");

});

app.get('/',(req,res)=>{

console.log(req.cookies);
res.end("hi");
});






app.listen(3000,()=>{
console.log('server opened on port 3000');
});