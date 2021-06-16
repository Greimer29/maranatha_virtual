const express = require('express');
const app = express();
const morgan = require('morgan');

//middlewares
app.use(morgan('dev'))
app.use(express.json());

//settings 
app.set('port', process.env.PORT || 3000 );

//starting the server
app.listen(app.get('port'),()=>{
    console.log(`Server on port: ${app.get('port')}`);
})