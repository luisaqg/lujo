const express = require('express');
const { postMiddleWare, getMiddleWare} = require('./middleware');
const router = express.Router();
const mascota = {
    nombre: '',
    raza: ''
}

router.route('')
    .get((req, res)=>{
        res.send('Hola ejercicio');
    })
    .post(postMiddleWare, (req, res, next)=>{
        const {nombre, raza} = req.body;
        mascota.nombre = nombre;
        mascota.raza = raza;
        res.status(201).end();
    })

router.get('/:id', getMiddleWare, (req, res, next)=>{
    res.json({
        id: req.params.id,
        nombre: mascota.nombre,
        raza: mascota.raza
    });
})

module.exports = router;
