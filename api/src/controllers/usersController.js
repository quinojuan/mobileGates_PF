const {User} = require('../db.js')


const getAllUsers = async(req, res) =>{
    // Código asíncrono para traer toda la información (todos los usuarios)
    // Primera ruta a armar para que los chicos del front puedan trabajar 
    const allUsers = await User.findAll();
    res.status(200).json(allUsers)
};

const getUserById = async(req, res) =>{
    // Código asíncrono para traer toda la información (todos los usuarios)
    // Primera ruta a armar para que los chicos del front puedan trabajar 
    const {id} = req.params;


    const user = await User.findByPk(id)
    res.status(200).json(user)
};

const createUser = async(req, res) =>{
    // Código asíncrono para traer toda la información (todos los usuarios)
    // Primera ruta a armar para que los chicos del front puedan trabajar 
    const {name, email, password} = req.body;

    const user = await User.create({where: {name, email, password}})
    res.status(200).json(user)
};