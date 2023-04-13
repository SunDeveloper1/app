const express=require('express')
const app=express()
const PORT=3000

app.listen(3000,()=>{
    console.log("Express arrived at PORT 3000")
})

app.get('/',(req,res)=>{
    res.json({

        "Message":"HEY NODE JS"
    })
})