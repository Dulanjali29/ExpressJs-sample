const express=require('express');
const app=express();

const user=require('./routers/user');
const student=require('./routers/student');
app.use(log);
app.use('/api/user',user);
app.use('/api/student',student);

function log(req,res,next){
    console.log("hello world for middle");
    next();   
}
console.log( process.env.PORT);
const port=process.env.PORT || 3000;


app.listen(port,()=>console.log(`App is Running on port `));


