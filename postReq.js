const express=require('express');

const app=express();
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));


app.post('/',(req,res)=>{
  console.log(req.body);
  res.send('hi');


});



app.get('/',(req,res)=>{
    res.sendFile( __dirname+'/index.html');
   
});



app.listen(3000,()=>{
console.log('server opened on port 3000');
});