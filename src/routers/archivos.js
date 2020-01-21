const { Router } = require('express');
const path = require('path');
const fs = require('fs');
const router = Router();

router.get('/',async (req, res)=>{
      res.json({ nombre: "archivo de prueba", url: "http://localhost/documentos/prueba.pdf"})
});



router.get('/:nombre', async (req, res) =>{
    const { nombre } = req.params;
    const file = path.join('documentos/' + nombre);
    console.log(file);
     const data = await fs.readFileSync(file);
     res.contentType("application/pdf");
     res.send(data);
});


/*
router.get('/:nombre', async (req, res) =>{
    const { nombre } = req.params;
    const url = path.join('documentos/' + nombre);
    res.download(url , nombre);
});
*/

module.exports = router;