const mongoose = require('mongoose');
const {Schema} = mongoose;

const annoSchema = new Schema ({
    name:{type:String,required:true}
});

module.exports = mongoose.model('anno',annoSchema);