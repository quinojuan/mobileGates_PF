const { Router } = require("express");
const router = Router();
const {
	getAllProducts,
	getAllPhones,
	getPhonesById,
	postPhone
} = require('../controllers/productsController');

router.get("/", getAllProducts);

router.get('/phones', getAllPhones);
router.get('/phones/:id', getPhonesById);
router.post('/phones', postPhone);


module.exports = router;
