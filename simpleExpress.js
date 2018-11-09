const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send('hello this is main page');
    
});

app.get('/ahmed',(req,res)=>{
    res.write('hello this is ahmed page');
    res.end();

});



app.get('/reda',(req,res)=>{
    res.write('hello this is reda page');
    res.end();

});

app.listen(3000,()=>{
console.log('server opened on port 3000');
});