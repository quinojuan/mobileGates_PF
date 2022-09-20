const { Purchases } = require('../db.js');

const getAllPurchases = async (req, res) => {
	try {
		let allPurchases = await Purchases.findAll({ attributes: ['name'] });
		allPurchases = allPurchases.map((purchase) => purchase.name);
		res.status(200).json(allPurchases);
	} catch (e) {
		console.log(e);
		res.status(500).json({ message: 'Server error' });
	}
};
const postPurchase = async (res, req) =>{
	try{
		

	}catch(e){
		res.status(500).json({message: "server error"})
	}
}

module.exports = {
	getAllPurchases,
};