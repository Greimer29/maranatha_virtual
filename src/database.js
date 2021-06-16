const mongoose = require('mongoose');
const URI = 'mongodb://localhost/maranatha';

mongoose.connect(URI)
.then(db=> console.log(`Oh yeah boy`))
.catch(err => console.error(err))

module.exports=mongoose;