const {Users} = require('../db.js')
const bCrypt = require("bcryptjs")


const getAllUsers = async(req, res) =>{
    try {

        const allUsers = await Users.findAll();
        // if(allUsers.length === 0) return res.status(404).json({message: "cannot find info in database"});
        res.status(200).json(allUsers)
    }catch(e){
        console.log(e);
        res.ratus(500).json({message: 'Server error'})
    };
};

const getUserById = async(req, res) =>{
    try{

        const {id} = req.params;
        if(!id) res.ratus(404).json({message: 'id is not provided'});
        const validation = await Users.findByPk(id);
        if(!validation){
            res.status(404).json({message: 'id not exists'});
        }else{
            res.status(201).json(validation);
        };
    }catch(e){
        console.log(e);
		res.status(500).json({ message: 'Server error' });  
    };
};

const createUser = async(req, res) =>{
    try{

        let {email, password, name, username} = req.body;
        if(!email || !password|| !username) return res.status(404).json({message: 'id is not provided'});

        const validation = await Users.findOne({where: {email: email}});
        const validation2 = await Users.findOne({where: {username: username}})
        if(validation && validation2){
            return res.status(404).json({message: 'user already exists'});
        }else{
            //aca se hashea la clave
            password = bCrypt.hashSync(password, 10)
            const newUser = await Users.create({email, name, password, username});
            return res.status(201).json({message: `${newUser.username} created! :D`});
        };
    }catch(e){
        console.log(e);
		
        res.status(500).json({ message: 'Server error' });  
    };
};

module.exports = {getAllUsers, getUserById, createUser}