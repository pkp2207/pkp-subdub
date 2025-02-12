import express from "express";
const app = express();

app.get('/',(req,res)=>{
    res.send( body: 'Welcome to the SubDub API');
});

app.listen(port:3000, hostname:()=>{
    console.log('SubDub API Running on 3000');
})

export default app;