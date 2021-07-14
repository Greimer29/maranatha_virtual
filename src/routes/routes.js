const express = require('express');
const router = express.Router();
const {Anno,Materia} = require('../models/models');

router.get('/materia', async (req,res)=>{
    const materia = await Materia.find();
    res.json(materia)
})
router.get('/materia/:id',async (req,res)=>{
    const anno = await Materia.findById(req.params.id);
    res.json(anno)
})
router.post('/:id/materia', async (req,res)=>{
    const {name} = req.body;
    const materia = new Materia({name,anno:req.params.id});
    await materia.save( async ()=>{
        const anno = await Anno.findById(req.params.id);
        const materias = anno.materias;
        materias += materia._id;
        console.log(materias);
    });
    res.json(materia)
})
router.delete('/materia/:id', async (req,res)=>{
    await Materia.findByIdAndRemove(req.params.id);
    res.json({
        status:'Materia eliminada'
    })
})

// ---------API Annos-----------
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
router.post('/', async (req,res)=>{
   try{
       const {name,materia} = req.body;
       const anno = new Anno({name,materia});
       await anno.save();
       res.json({
           status:'Año guardado'
       })
   }catch(err){
       res.send(err);
   }
})

//Eliminar años
router.delete('/:id', async (req,res)=>{
    try{
        await Anno.findByIdAndRemove(req.params.id);
        res.json({
            status:'Año eliminado'
        })
    }catch(err){
        console.error(err);
    }
})

module.exports = router;