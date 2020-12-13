const express = require('express');
const { postMiddleWare, getMiddleWare} = require('./middleware');
const router = express.Router();
const mascotas = []

router.route('')
    .get((req, res)=>{
        res.json(mascotas);
    })
    .post(postMiddleWare, (req, res, next)=>{
        const {nombre, raza} = req.body;
        mascotas.push({
            id: mascotas.length + 1,
            nombre,
            raza
        })
        res.status(201).end();
    })

router.get('/:id', getMiddleWare, (req, res, next)=>{
    const mascota = mascotas.find(item => item.id === req.id);
    res.json(mascota);
})

module.exports = router;
