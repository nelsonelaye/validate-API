require("./Config/connect.js")
const express = require("express")
const port = 2022
const router = require("./Router/router")


const app = express()

app.use(express.json())

app.use("/", router)

app.get("/", (req, res) =>{
    res.send("Welcome to ValidateDB...")
})

app.listen(port, () =>{
    console.log("Loading app..")
})