var express=require('express');
const router=require('./userRouter.js').userRouter;
const app=express();


app.use('/user',router);


app.listen(3000,()=>{
console.log('server opened on port 3000');
});