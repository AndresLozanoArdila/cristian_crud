const express = require ('express')
const dotenv = require ('dotenv')
const colors = require ('colors')

//Dependencias de rutas
const bootcampsRoutes = require('./routes/bootcampsRoutes')
const coursesRoutes = require('./routes/coursesRoutes')

//construir el objeto app
const app = express()

//vincular rutas
app.use('/bootcamps', bootcampsRoutes)
app.use('/courses', coursesRoutes)

//configurar variables de entorno 
dotenv.config(
    {path: './config/.env'}
)

//prueba de url
app.get('/prueba', function(req,res){
    res.send('Hola')
});

//tomar variable puerto de entorno 
const puerto = process.env.PUERTO

//prueba de ruta parametrizada
app.get('/prueba/:id', function(req,res){
    res.send(`parametro enviado: ${req.params.id }`)
});

//servidor de desarrollo
app.listen(puerto, function(){
    console.log(`servidor ejecutando....${puerto}`.bgMagenta.yellow.inverse)
})

