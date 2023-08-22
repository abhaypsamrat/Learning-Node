const express = require('express')
const app = express()

app.use('/', (req, res, next)=>{
    console.log("This always runs");
    next();
})

app.use('/add-product',(req, res, next)=>{
    console.log("This is middleware");
    res.send('<h1>the "Add Product" Page</h1>')
})

app.use('/',(req, res, next)=>{
    console.log("Another middleware");
    res.send("<h1>This is html text</h1>")
})

app.listen(3000);