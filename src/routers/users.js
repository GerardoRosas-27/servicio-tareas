const { Router } = require('express');
const router = Router();
//importar los metodos del controlador users
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/users.controller')
//definir rutas de useres sin id como parametro 
// localhost:4000/api/users
router.route('/')
    .get(getUsers)
    .post(createUser)

//definir las ruats con id como parametro
// localhost:4000/api/users/:id
router.route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser)
    
module.exports = router;