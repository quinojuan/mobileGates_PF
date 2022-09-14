const { Router } = require('express');
const router = Router();
const {
	getAllProducts,
	postProduct,
	getAllTablets,
} = require('../controllers/productsController');

router.get('/', getAllProducts);
router.get('/tablets', getAllTablets); // >>>>>>> está apuntando a traer los telefonos (IMSOMNIA) <<<<<<<
router.post('/', postProduct);

module.exports = router;
