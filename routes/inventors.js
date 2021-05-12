var express = require('express');
var router = express.Router();
const dataInventor = require('../data/inventor');

// dado un json de inventores
// 1.- un endpoint que retorne todos los iventores
// 2.- un endpoint que retorne un invetor por id
// 3.- recibe un filtro y retorne los inventores que cumplan con ese filtro
// 4.- endpoint que cree un inventor
// 5.- endpoint que actualice un inventor
// 6.- endpoint que elimine un inventor


router.get('/', async function(req, res) {
  const inventors = await dataInventor.getInventors();
  res.json(inventors);
});

router.get('/:id', async (req, res)=>{
    const inventor = await dataInventor.getInventor(req.params.id);
    res.json(inventor);
});

router.post('/', async (req, res)=>{
    // TODO: Validacion
    let inventor = req.body;
    
    inventor = await dataInventor.addInventor(inventor);
    res.json(inventor);
});

router.put('/:id', async (req, res)=>{
    // TODO: Validacion
    let id = req.params.id;
    let inventor = req.body;
    inventor._id = id;
    inventor = await dataInventor.updateInventor(inventor);
    res.json(inventor);
});

module.exports = router;