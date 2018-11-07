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


exports.userRouter=router;
