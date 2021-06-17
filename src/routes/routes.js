const express = require('express');
const router = express.Router();
const Anno = require('../models/models');

router.get('/api/anno', async (req,res)=>{
    try {
        const anno = await Anno.find();
        // console.log(ano);
        res.json(anno)
    }catch(err){
        err = new Error('Algo ha salido mal');
        console.error(err);
    }
})

module.exports = router;