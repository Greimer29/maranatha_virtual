const mongoose = require('mongoose');
const {schema} = mongoose;

const annoSchema = new schema ({
    name:{type:String,required:true}
});

module.exports = mongoose.model('anno',annoSchema);