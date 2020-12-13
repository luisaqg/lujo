const express = require('express');
const ejercicio = require('./ejercicio');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/ejercicio', ejercicio)

app.all('*',(req, res)=>{
    res.status(500).send("No ruta");
})

app.listen(8080);
