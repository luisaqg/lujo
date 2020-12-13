const postMiddleWare = (req, res, next)=>{
    const {nombre, raza} = req.body;
    if (!nombre && !raza) res.send('Información erronea');
    next();
}

const getMiddleWare = (req, res, next)=>{
    const parametro = parseInt(req.params.id, 10);
    if (typeof parametro == "number"  && !isNaN(parametro)){
        next();
    }else{
        res.send('Información erronea');
    }
}

module.exports = { postMiddleWare, getMiddleWare };
