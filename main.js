const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose");
const cors = require('cors')
const app = express()
dotenv.config()

mongoose.connect(process.env.DB_URL)
    .then(console.log("db connected succesfully"))
    .catch(err => {
        console.log("error",err)
    })

const userRouter = require("./Router/user-router")

app.use(express.json())

app.use(cors()) 

let corsOptions = {
    origin: [ 'http://localhost:3000', ]
};

app.use("/",cors(corsOptions), userRouter )



//port
app.listen(3000, (req, res) => {
    console.log("welcome trainees backend port on 3000")
})