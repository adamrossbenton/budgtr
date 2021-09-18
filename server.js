const express = require("express")
const app = express()
const methodOverride = require("method-override")
const budget = require("./models/budget")
const port = 3000

////////////////////////////////////////////////////////////////
// MIDWARE
////////////////////////////////////////////////////////////////

app.use(express.urlencoded({extended:false}))
app.use(express.static("public"))
app.use(methodOverride("_method"))

////////////////////////////////////////////////////////////////
// ROUTES
////////////////////////////////////////////////////////////////

// INDEX
app.get('/budgets',(req,res) => {
    res.render("index.ejs",{budget: budget,title: "INDEX - Budgtr"})
})

// NEW
app.get('/budgets/new',(req,res) => {

})

// CREATE
app.post('budgets',(req,res) => {

})

// SHOW
app.get('/budgets/:id',(req,res) => {

})
////////////////////////////////////////////////////////////////
// LISTENER
////////////////////////////////////////////////////////////////

app.listen(port, () => {
    console.log(`listening on ${port}`)
})