const express=require('express');
const app=express();

const morgan=require('morgan');
const user=require('./routers/user');
const student=require('./routers/student');

// app.use(log);
app.use(express.json());
// app.use('/api/user',log,user);
// console.log(app.get('env'));

if(app.get('env')==='development'){
    app.use(morgan('dev'))
}

app.use('/api/user',user);
app.use('/api/student',student);

function log(req,res,next){
    console.log("hello world for middle");
    req.id="10";
    next();   
}
// console.log( process.env.PORT);
 

const port=process.env.PORT || 3000;


app.listen(port,()=>console.log(`App is Running on port `));


