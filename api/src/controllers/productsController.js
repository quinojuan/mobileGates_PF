const {Tablets, Phones, Notebooks} = require('../db');

const getAllProducts = async(req, res) =>{
    // Código asíncrono para traer toda la información (todos los productos)
    // Primera ruta a armar para que los chicos del front puedan tranajar 
    try{

        const allPhones = await Phones.findAll();
        const allTablets = await Tablets.findAll();
        const allNotebooks = await Notebooks.findAll();
    
        if(allPhones.length  === 0 || allNotebooks.length === 0 || allTablets.length === 0) res.status(404).json({message: 'Error en find all'});
        const allProducts = allPhones.concat(allTablets).concat(allNotebooks);
        if(allProducts.length === 0) res.status(404).json({message: 'Error en concatenación'});
        res.status(201).json({message: 'done'}, allProducts);
    
        
    }catch(e){
        console.log(e);
        res.status(500).json({message: 'Server error'}); 
    };
};

module.exports = {
    getAllProducts
};