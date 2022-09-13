const { Router } = require('express');
const router = Router();
const getAllProducts = require('../controllers/productsController');

router.get('/dogs', getAllProducts);

module.exports = router;
