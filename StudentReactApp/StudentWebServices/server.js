const express=require("express")
const app=express();
const bodyparser=require('body-parser')
const db=require("./db")
const {response}=require("express")
const cors=require("cors")

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))
app.use(cors());
app.use(function(req,resp,next){

    resp.setHeader("Access-Control-Allow-Origin","*");
  next();
});

app.get("/student",(req,resp)=>{
    const statement=`select * from studentDetails`;
    db.execute(statement,(err,data)=>{
        resp.send(data)
    })
})

app.post("/student",(req,resp)=>{
    const{RollNo,StudName,Course,DOA,Phone}=req.body
    const statement=`insert into studentDetails values('${RollNo}','${StudName}','${Course}','${DOA}','${Phone}')`;
    db.execute(statement,(err,data)=>{
        resp.send(data)
    })
})
app.get("/register",(req,resp)=>{
    const statement=`select * from registration`;
    db.execute(statement,(err,data)=>{
        resp.send(data);
    })
})

app.post("/register",(req,resp)=>{
    const{PRN,PWD,CNFPWD}=req.body
    const statement=`insert into registration values('${PRN}','${PWD}','${CNFPWD}')`
   db.execute(statement,(err,data)=>{
    resp.send(data)
   })

})
app.post("/login",(req,resp)=>{
    const{PRN,PWD}=req.body
    const statement=`select * from registration where PRN='${PRN}' and PWD='${PWD}'`
    db.execute(statement,(err,data)=>{
        resp.send(data)
    })
})

app.listen(4000);
console.log("server start at 4000");



