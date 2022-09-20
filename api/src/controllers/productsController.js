const { Tablets, Phones, Notebooks, Brand} = require('../db');

// -------------------- GET ALL --------------------

const getAllProducts = async (req, res) => {
	try {
		const { ram, category, name, capacity } = req.query;
		const allPhones = await Phones.findAll();
		//const allTablets = await Tablets.findAll();
		//const allNotebooks = await Notebooks.findAll();
		let allProducts = await allPhones
		if (req.query) {
			if (ram) {
				allProducts = allProducts.filter((product) =>
					product.ram.includes(Number(ram))
				);
			}
			if (category) {
				allProducts = allProducts.filter((product) =>
					product.category.toLowerCase().includes(category.toLowerCase())
				);
			}
			if (name) {
				let model = name;
				allProducts = allProducts.filter((product) =>
					product.model.toLowerCase().includes(model.toLowerCase())
				);
			}
			if (capacity) {
				allProducts = allProducts.filter((product) =>
					product.capacity.includes(capacity)
				);
			}
		}
		res.status(200).json(allProducts);
	} catch (e) {
		console.log(e);
		res.status(500).json({ message: 'Server error' });
	}
};

// -------------------- PHONES --------------------

const getAllPhones = async (req, res) => {
	try {
		const allPhones = await Phones.findAll();
		return res.status(200).json(allPhones);
	} catch (e) {
		console.log(e);
		res.status(500).json({ message: 'Server error' });
	}
};

const getPhonesById = async (req, res) => {
	try {
		const { id } = req.params;
		if (!id) res.ratus(404).json({ message: 'id is not provided' });
		const validation = await Phones.findByPk(id);
		res.status(200).json(validation);
	} catch (e) {
		console.log(e);
		res.status(500).json({ message: 'Server error' });
	}
};

const postPhone = async (req, res) => {
	//PRUEBA POSTEANDO UNICAMENTE UNA TABLET (HABRÍA QUE CREAR UN MODEL DE PRODUCT ASI DEPENDE LA CATEGORÍA SE SUBE O TABLET O NOTEBOOK O PHONE)
	try {
		const {
			category,
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
		
		if (
			category &&
			model &&
			operative_system &&
			size &&
			inches &&
			main_camera &&
			ram &&
			capacity &&
			frontal_camera &&
			weight &&
			battery &&
			price &&
			image &&
			cpu &&
			description
		) {
			const validation = await Phones.findOne({ where: { model: model } });
			if (validation === null) {
				const newPhone = await Phones.create({
					category,
					model,
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
				});

				let brandId = await Brand.findOne({ where: { name: brand, } })
                console.log(newPhone, "PHONEE")
				console.log(brandId.dataValues.id,"ID??????")
				await newPhone.addBrand(brandId.dataValues.id)
				const phoneWithBrand = await Phones.findByPk(newPhone.id, {
					include: [
					  {
						model: Brand,
					  },
					],
				  });
				  //phoneWithBrand = phoneWithBrand.Brands[0].name
				 let presentacion = {
					category,
					model,
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
					brand: phoneWithBrand.Brands[0].name
				}
				presentacion
					? res.status(201).json(presentacion)
					: res.status(404).json({ message: 'Error /post product' });
			} else {
				res.status(200).json({ mesage: 'product already exist' });
			}
		} else {
			res.status(400).json({ message: 'error, missing info' });
		}
	} catch (e) {
		console.log(e);
		res.status(500).json({ message: 'Server error' });
	}
};

module.exports = {
	getAllProducts,
	getAllPhones,
	getPhonesById,
	postPhone,
};
