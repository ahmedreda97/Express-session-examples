const express=require('express');
const app=express();

const router=express.Router();
router.get('/profile',(req,res)=>{
res.send('profile');
});


router.get('/settings',(req,res)=>{
res.send('settings');
});


exports.userRouter=router;
