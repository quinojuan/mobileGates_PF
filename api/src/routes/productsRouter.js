const { Router } = require('express');
const router = Router();
const {
	getAllProducts,
	postTablet,
	getAllTablets,
} = require('../controllers/productsController');

router.get('/', getAllProducts);
<<<<<<< HEAD
router.get('/tablets', getAllTablets);
router.post('/', postTablet);
=======
router.get('/tablets', getAllTablets); // >>>>>>> está apuntando a traer los telefonos (IMSOMNIA) <<<<<<<
router.post('/', postProduct);
>>>>>>> 3a8a0ac82ddbe3a25c5c8bc058ce2e3c44562b79

module.exports = router;
