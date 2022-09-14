const { Router } = require('express');
const router = Router();
const {
	getAllProducts,
	postTablet,
	getAllTablets,
	getTabletById,
	getAllNotebooks,
	getNotebookById
} = require('../controllers/productsController');

router.get('/', getAllProducts);

router.get('/tablets', getAllTablets);
router.get('/tablets/:id', getTabletById);
router.post('/', postTablet);

router.get('/notebooks', getAllNotebooks);
router.get('/notebooks/:id', getNotebookById);


module.exports = router;
