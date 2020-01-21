const mongoose = require('mongoose');

//la ruta de la url de la base de datos eta en una variable de entorno
//mongodb://localhost/tareas
const bd_url = process.env.mongo_url;
const url = bd_url ? bd_url: 'mongodb://localhost/tareastest';
console.log(url);

//conexion a la base de datos mongose
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => console.log('db conectada tareas'))
    .catch(err => console.log(err));