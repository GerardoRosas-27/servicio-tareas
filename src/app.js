const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

//middlewares
app.use((req, res, next) => {
    // Dominio que tengan acceso (ej. 'http://example.com')
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Metodos de solicitud que deseas permitir
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    // Encabecedados que permites (ej. 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
  });
  
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


//settings
app.set('port', process.env.PORT || 4000);

//routers
app.use('/', require('./routers/condicines'));
app.use('/api/users', require('./routers/users'));
app.use('/api/notes', require('./routers/notes'));
app.use('/api/archivos', require('./routers/archivos'));


module.exports = app;