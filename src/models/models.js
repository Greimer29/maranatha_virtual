const mongoose = require('mongoose');
const {Schema} = mongoose;

const materiaSchema = new Schema ({
    name:{type:String, required:true},
    anno: [{type: Schema.Types.ObjectId, ref:'anno'}]
})

const Materia = mongoose.model('Materia', materiaSchema);

const annoSchema = new Schema ({
    name:{type:String,required:true},
    materias:[{type: Schema.Types.ObjectId, ref:'Materia'}]
});
const Anno = mongoose.model('anno',annoSchema);

module.exports = {Anno, Materia}
