


const express = require('express')
const app = express()
const {engine} = require('express-handlebars');
const path=require('path')


app.engine('.hbs',engine({
    extname:'.hbs'
}))
app.set('view engine', ".hbs");
app.set('views',path.join(__dirname,'views'))


app.get('/',(req,res)=>{
    res.render("home")
})

app.listen(3000)
console.log('Servidor ok!!');