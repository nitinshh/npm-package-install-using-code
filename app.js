const express = require("express")
const app = express()
const {exec}=require("child_process")
const PORT = 3000


app.listen(PORT, ()=>{
    exec("npm i nodemon")
    console.log(`Server is running on ${PORT}`)
})