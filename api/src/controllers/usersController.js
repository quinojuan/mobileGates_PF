const {User} = require('../db.js')


const getAllUsers = async(req, res) =>{
    try {

        const allUsers = await User.findAll();
        if(allUsers.length === 0) return res.status(404).json({message: "cannot find info in database"});
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
        const validation = await Tablets.findByPk(id);
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

        const {id} = req.params;
        if(!id) res.ratus(404).json({message: 'id is not provided'});
        const validation = await Tablets.findByPk(id);
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