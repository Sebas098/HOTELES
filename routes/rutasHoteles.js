//espacio para definir las rutas
//o endpoints especificos de SU API

import express from "express";

export let rutasAPI= express.Router()

//ACA PONE SUS ENDPOINTS

rutasAPI.post('/api/habitaciones', function (req, res) {
    res.send('Estoy guardando una habitacion')
  });
  
  rutasAPI.get('/api/habitaciones', function (req, res) {
    res.send('Estoy buscando las habitaciones')
  })
  rutasAPI.get('/api/habitaciones', function (req, res) {
    res.send('Estoy buscando una habitacion')
  })
 rutasAPI.put('/api/habitaciones', function (req, res) {
    res.send('Estoy modificando una habitacion')
  })
 rutasAPI.delete('/api/habitaciones', function (req, res) {
    res.send('Estoy eliminando una Habitacion')
  })
