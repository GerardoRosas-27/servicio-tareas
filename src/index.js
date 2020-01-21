require('dotenv').config();//importar variables de entorno
require('./database');
const app = require('./app');

async function main(){
   await app.listen(app.get('port'));
   console.log(`el servidor corre en localhost:${app.get('port')}`);
}

main();