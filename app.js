const express = require('express');
const path = require('path')
const app = express()
const homeRouter = require('./routes/home')
const adminRouter = require("./routes/admin")
const bodyParser = require("body-parser")
app.set('view engine', 'ejs')
app.set('views','views')
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended:false}))
app.use(homeRouter)
app.use(adminRouter)

app.listen(3000,()=>{
    console.log('server run on port 3000');
})