const express=require('express');
const app=express();

var auth=(req,res,next)=>{
if(req.headers['let-me-in']=='yes'){
    next();
}
else{
    res.send('not authorized');
}

}

app.use(auth);

app.post('/',(req,res)=>{

    res.send('Authorized');
});




app.listen(3000,()=>{
    console.log('server opened on port 3000');
    });