const { Router } = require('express');
const router = Router();
const {
	getAllProducts,
	postTablet,
	getAllTablets,
} = require('../controllers/productsController');

router.get('/', getAllProducts);
router.get('/tablets', getAllTablets);
router.post('/', postTablet);

module.exports = router;
