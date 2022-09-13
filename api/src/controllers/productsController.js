const {Tablets, Phones, Notebooks} = require('../db');

const getAllProducts = async() =>{
    // Código asíncrono para traer toda la información (todos los productos)
    // Primera ruta a armar para que los chicos del front puedan tranajar 
    
    const allPhones = await Phones.findAll();
    const allTablets = await Tablets.findAll();
    const allNotebooks = await Notebooks.findAll();

    if(allPhones.length  === 0 || allNotebooks.length === 0 || allTablets.length === 0) return false;
    const allProducts = allPhones.concat(allTablets).concat(allNotebooks);
    if(allProducts.length === 0) return false;
    return allProducts

};