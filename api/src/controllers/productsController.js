const { Tablets, Phones, Notebooks } = require('../db');

const getAllProducts = async (req, res) => {
	// Código asíncrono para traer toda la información (todos los productos)
	// Primera ruta a armar para que los chicos del front puedan tranajar
	try {
		const allPhones = await Phones.findAll();
		const allTablets = await Tablets.findAll();
		const allNotebooks = await Notebooks.findAll();

		if (
			allPhones.length === 0 ||
			allNotebooks.length === 0 ||
			allTablets.length === 0
		)
			return res.status(404).json({ message: 'Error en find all' });
		//subirTablets
		const allProducts = allPhones.concat(allTablets).concat(allNotebooks);
		if (allProducts.length === 0)
			return res.status(404).json({ message: 'Error en concatenación' });
		res.status(201).json({ message: 'done', allProducts});
	} catch (e) {
		console.log(e);
		res.status(500).json({ message: 'Server error' });
	}
};
const postProduct = async (req, res) => {
	//PRUEBA POSTEANDO UNICAMENTE UNA TABLET (HABRÍA QUE CREAR UN MODEL DE PRODUCT ASI DEPENDE LA CATEGORÍA SE SUBE O TABLET O NOTEBOOK O PHONE)
	try {
		const {
			model,
			brand,
			operative_system,
			size,
			inches,
			main_camera,
			ram,
			capacity,
			frontal_camera,
			weight,
			battery,
			price,
			image,
			cpu,
			description,
		} = req.body;
		const newTablet = {
			model,
			brand,
			operative_system,
			size,
			inches,
			main_camera,
			ram,
			capacity,
			frontal_camera,
			weight,
			battery,
			price,
			image,
			cpu,
			description,
		};
		Tablets.create(newTablet);
		res.status(200).json(newTablet);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'Server error' });
	}
};

const getAllTablets = async (req, res) => {
	try {
		const allTablets = await Tablets.findAll();
		if (allTablets.length !== 0) {
			return res.status(200).json(allTablets);
		}
		res.status(404).json({ message: 'Not found any tablet' });
	} catch (e) {
		console.log(e);
		res.status(500).json({ message: 'Server error' });
	}
};

module.exports = {
	getAllProducts,
	postProduct,
	getAllTablets,
};
