const { Router } = require("express");
const router = Router();
const {
	getAllBrands
} = require('../controllers/brandsController');

router.get('/brands', getAllBrands);

module.exports = router;