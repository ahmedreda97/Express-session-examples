

const express=require('express');
var router = express.Router();

    router.get('/profile', (req, res) => {
        res.write('profile');
        res.end();
    });

    router.get('/status', (req, res) => {
        res.write('active');
        res.end();
    });
    
    module.exports=router;