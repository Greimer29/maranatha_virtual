const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.json({
        status:'API works normaly'
    })
})

module.exports = router;