const express = require("express")
require("dotenv").config()

const app = express();
const port = 3000;

const password = process.env.PASSWORD

const quene = []

app.use(express.static(__dirname + '/visual'));
app.use(express.static(__dirname + '/scripts'));

app.get("/command", (req, res) => {
    if (req.query.password != password) {
        res.send(undefined)
    }

    const first = quene.shift()
    
    res.send(first)
})

app.post("/command", (req, res) => {
    // TODO
})

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})