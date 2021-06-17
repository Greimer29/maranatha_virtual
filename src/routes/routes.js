const express = require('express');
const router = express.Router();
const Anno = require('../models/models');

//Obtenee todos los años al hacer una búsqueda general
router.get('/', async (req,res)=>{
    try {
        const anno = await Anno.find();
        res.json(anno)
    }catch(err){
        err = new Error('Algo ha salido mal');
        console.error(err);
    }
})

//Obtener un solo año al ingresar su "id"
router.get('/:id',async (req,res)=>{
    const anno = await Anno.findById(req.params.id);
    res.json(anno)
})

//Insertar años, no sé para qué querría ingresar más años.
router.post('/api/anno', async (req,res)=>{
   try{
       const {name} = req.body;
       const anno = new Anno({name});
       await anno.save();
       res.json({
           status:'Año guardado'
       })
   }catch(err){
       err = new Error('Algo ha salido mal');
       res.send(err);
   }
})

module.exports = router;