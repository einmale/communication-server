const express = require("express")
const bodyParser = require("body-parser")
require("dotenv").config()

const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(express.static(__dirname + '/visual'));
app.use("/scripts", express.static(__dirname + '/scripts'));

const password = process.env.PASSWORD
const quene = []

app.get("/command", (req, res) => {
    if (req.query.password != password) {
        res.send(undefined)
    }

    const first = quene.shift()
    
    res.send(first)
})

app.post("/command", (req, res) => {
    const body = req.body

    if (body.password != password) {
        res.json({
            status: "error",
            message: "Password Invalid."
        })
        return
    }

    quene.push([
        "SERVER",
        body.command,
        body.text,
    ])
    
    res.json({
        status: "success",
        message: "How."
    })
})

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})