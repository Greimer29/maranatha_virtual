const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

const {mongoose} = require('./database');

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/',require('./routes/routes'));

//settings 
app.set('port', process.env.PORT || 3000 );

//statics files
app.use(express.static(path.join(__dirname, 'public')))

//starting the server
app.listen(app.get('port'),()=>{
    console.log(`Server on port: ${app.get('port')}`);
})