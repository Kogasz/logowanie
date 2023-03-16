const express = require("express")
const cors = require("cors")
const port =  3000
const app = express()
app.use(cors())

var login = [{login:"admin", adminpass:"admin"},{login:"user", adminpass:"user"}]

app.get("/login", function(req,res){

res.json(login)    
})
app.listen(port)