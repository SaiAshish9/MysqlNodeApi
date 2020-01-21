const express=require('express')
const app=express()
const routes=require('./routes/routes')

app.use(express.json())

app.use('/api/',routes)




app.listen(process.env.PORT||3000,()=>{
  console.log("server started");
})
