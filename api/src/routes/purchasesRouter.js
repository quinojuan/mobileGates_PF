const { Router } = require('express');
const router = Router();
const { postPurchase, getAllPurchases } = require('../controllers/purchasesController');

router.get('/', getAllPurchases);
router.post('/', postPurchase)
router.post('/sendmail')

module.exports = router;