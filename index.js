//Importando la Herramienta
const express = require('express')
const app = express()

//atendiendo peticiones
app.post('/api/habitaciones', function (req, res) {
  res.send('Estoy guardando una habitacion')
})
app.get('/api/habitaciones', function (req, res) {
    res.send('Estoy buscando las habitaciones')
  })
  app.get('/api/habitaciones', function (req, res) {
    res.send('Estoy buscando una habitacion')
  })
  app.put('/api/habitaciones', function (req, res) {
    res.send('Estoy modificando una habitacion')
  })
  app.delete('/api/habitaciones', function (req, res) {
    res.send('Estoy eliminando una Habitacion')
  })
    

//levantando un servidor
app.listen(3000,function(){
    console.log("Servidor operando")
})