const express=require('express');
const router=express.Router();

// router.get('/',(req,res)=>{
//     res.send(req.id);
// });

// router.post('/',(req,res)=>{
//     res.send({'msg':'Hello Post'});
// });

// router.get('/add',(req,res)=>{
//     res.send({'msg':'user add from /api/user/add'});
// });


router.route('/')
.get((req,res)=>{
res.send(req.id);
})
.post((req,res)=>{
    res.send(req.body);
    })
    
module.exports=router;