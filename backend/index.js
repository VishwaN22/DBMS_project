import express from "express"
import mysql from "mysql"

const app = express()



const db = mysql.createConnection({
   host:"localhost",
   user:"root",
   password:"vpn@2003" ,
   database:"Experiment3"
})





app.get("/",(req,res)=>{
    res.json("Welcome to backend")
})



app.get("/salesman",(req,res)=>{
    const q = "SELECT * FROM SALESMAN_MASTER_1"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.listen(8800, ()=>{

    console.log("Connected to backend")
})

