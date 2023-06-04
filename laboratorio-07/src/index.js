/* const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("Hello ALito estoy usando JS!")
})

app.listen(3000)
console.log('Servidor ok!!'); */

/* RUTAS */
/* const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("Pagina Principal")
})
app.get('/dashboard',(req,res)=>{
    res.send("Dashboard principal")
})
app.get('/contact',(req,res)=>{
    res.send("Contactos de la página web- usando express")
})
app.get('/products',(req,res)=>{
    res.send("Productos para vender")
})
// Manejo de una ruta que no sea encontrada
app.use((req,res)=>{
    res.status(404).send("Página no encontrada - 404")
})
app.listen(3000)
console.log('Servidor ok!!'); */

/* RUTAS VERBOS HTTP */

/* const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("Obtener datos del servidor")
})
app.post('/',(req,res)=>{
    res.send("Enviar datos al servidor")
})
app.put('/',(req,res)=>{
    res.send("Actualizar toda la información")
})
app.patch('/',(req,res)=>{
    res.send("Actualizar solo un porción de la información")
})
app.delete('/',(req,res)=>{
    res.send("Eliminar algún dato del servidor")
})
app.listen(3000)
console.log('Servidor OK!!'); */

/* contenido multimedia */

/* const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.sendFile('./akatsuki.jpg',{
        root:__dirname
    })
})
console.log(__dirname);

app.listen(3000)
console.log('Servidor ok!!'); */

/* enviar un JSON  al server*/
/* const express = require('express')
const app = express()

app.get('/user',(req,res)=>{
    res.json({
        "nombre":"Alito",
        "apellido":"Chasi",
        "edad":28,
        "direccion":{
            "callePrincipal":"Quito sur",
            "calleSecundaria":"s15",
        }
    })
})
app.listen(3000)
console.log('Servidor ok!!'); */

/* codigos de estado */

/* const express = require('express')
const app = express()

app.get('/isAlive',(req,res)=>{
    res.sendStatus(204)
})
app.listen(3000)
console.log('Servidor ok!!'); */


const express = require('express')
const app = express()
const {engine} = require('express-handlebars');


app.engine('.hbs',engine({
    extname:'.hbs'
}))
app.set('view engine', '.hbs');
app.set('views', './src/views');


app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/personal',(req,res)=>{
    res.render('personal')
})


app.listen(3000)
console.log('Servidor ok!!');