const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send({'msg':'Hello Get'});
});

router.post('/',(req,res)=>{
    res.send({'msg':'Hello Post'});
});

router.get('/add',(req,res)=>{
    res.send({'msg':'user add from /api/user/add'});
});


module.exports=router;