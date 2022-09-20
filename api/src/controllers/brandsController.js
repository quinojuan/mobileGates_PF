const { Brand } = require('../db.js');

const getAllBrands = async (req, res) => {
	try {
		let allBrands = await Brand.findAll({ attributes: ['name'] });
		if (allBrands.length === 0)
			return res.status(404).json({ message: 'Error en find all' });
			allBrands = allBrands.map((brand) => brand.name);
		res.status(200).json(allBrands);
	} catch (e) {
		console.log(e);
		res.status(500).json({ message: 'Server error' });
	}
};

module.exports = {
	getAllBrands,
};
