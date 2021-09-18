const express = require("express")
const app = express()
const methodOverride = require("method-override")
const bodyParser = require("body-parser")
// probably don't need to require jQuery, not using it
const jQuery = require("jquery")
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
    res.render('new.ejs',{title: "NEW - Budgtr"})
})

// CREATE
app.post('/budgets',(req,res) => {
    budget.push(req.body)
    res.redirect('/budgets')
})

// SHOW
app.get('/budgets/:id',(req,res) => {
    res.render('show.ejs',{budgetItem: budget[req.params.id], title: `${budget[req.params.id].name.toUpperCase()} - Budgtr`})
})
////////////////////////////////////////////////////////////////
// LISTENER
////////////////////////////////////////////////////////////////

app.listen(port, () => {
    console.log(`listening on ${port}`)
})