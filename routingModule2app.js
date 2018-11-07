var express=require('express');
const router=require('./routingModule2.js').userRouter;
const app=express();


app.use('/user',router);


app.listen(3000,()=>{
console.log('server opened on port 3000');
});