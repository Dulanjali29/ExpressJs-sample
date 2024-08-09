const express=require('express');
const app=express();

app.get('/api/user',(req,res)=>{

    res.send({'msg':'hello Get'});

});

app.post('/api/user',(req,res)=>{
    res.send({'msg':'hello post'});
});

app.get('/api/student',(req,res)=>{

    res.send({'msg':'hello Student'});

});

app.post('/api/student',(req,res)=>{
    res.send({'msg':'hello post from Student '});
});
console.log( process.env.PORT);
const port=process.env.PORT || 3000;


app.listen(port,()=>console.log(`App is Running on port ${port} `));


