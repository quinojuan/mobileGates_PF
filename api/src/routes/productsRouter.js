const { Router } = require("express");
const router = Router();
const {
	getAllProducts,
	postTablet,
	getAllTablets,
	getTabletById,
	getAllNotebooks,
	getNotebookById,
	postNotebook,
	get
} = require('../controllers/productsController');

router.get("/", getAllProducts);

router.get('/tablets', getAllTablets);
router.get('/tablets/:id', getTabletById);
router.post('/tablets', postTablet);

router.get('/notebooks', getAllNotebooks);
router.get('/notebooks/:id', getNotebookById);
router.post('/notebooks', postNotebook);



module.exports = router;
