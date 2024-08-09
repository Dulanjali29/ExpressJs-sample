const express=require('express');
const app=express();

app.get('/api/user/afsd',(req,res)=>{

res.status(404).send({'msg':'Hello'});

});

app.listen(3000);


