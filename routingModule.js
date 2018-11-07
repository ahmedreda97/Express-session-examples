const express=require('express');
const app=express();

const router=express.Router();
router.get('/profile',(req,res)=>{
res.send('profile');
res.end();
});


router.get('/settings',(req,res)=>{
res.send('settings');
res.end();
});



app.use('/user',router);


app.listen(3000,()=>{
console.log('server opened on port 3000');
});