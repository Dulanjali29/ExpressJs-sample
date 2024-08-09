const express=require('express');
const app=express();

app.get('/api/user',(req,res)=>{

    res.send({'msg':'hello Get'});

});

app.post('/api/user',(req,res)=>{
    res.send({'msg':'hello post'});
});

app.listen(3000);


