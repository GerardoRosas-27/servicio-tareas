const users = {};

users.getUsers = async (req, res) => {
    res.json({mensaje: 'todos los usuarios'});
}

users.getUser = async (req, res) =>{
    res.json({mensaje: 'solo un usuario'})
}

users.createUser = async (req, res) =>{
    res.json({mensaje: 'crear usuarios'});
}

users.updateUser = async (req, res) =>{
    res.json({mensaje: 'actualizar usuarios'});
}

users.deleteUser = async (req, res) =>{
    res.json({mensaje: 'eliminar usuarios'})
}

module.exports = users;