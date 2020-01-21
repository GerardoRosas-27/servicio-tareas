const { Router } = require('express');
const router = Router();
//importar los metodos del controlador notes
const { getNotes, getNote, createNote, updateNote, deleteNote } = require('../controllers/notes.controller');

//definir las rutas de la aplicacion(get,post,put,delete)
//sin id como parametro
// localhost:4000/api/notes
router.route('/')
    .get(getNotes)
    .post(createNote)
    
//rutas con id como parametro
// localhost:4000/api/notes/:id
router.route('/:id')
    .get(getNote)
    .put(updateNote)
    .delete(deleteNote)

module.exports = router;