const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send({'msg':'Hello Student Get'});
});

router.post('/',(req,res)=>{
    res.send({'msg':'Hello  Student Post'});
});


module.exports=router;