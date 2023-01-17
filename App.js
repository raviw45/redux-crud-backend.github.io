const bodyParser = require('body-parser');
const express=require('express');
const app=express();
const port=7890;
const userRouter=require('./routes/userRouter');
const cors=require('cors');

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use("/",userRouter);

app.listen(port,(err)=>{
    if(err) console.log("Error:::",err);
    else console.log(`server is running on the port ${port}`);
});