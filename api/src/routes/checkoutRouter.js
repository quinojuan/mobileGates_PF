const {Router} = require('express');
const { checkoOut } = require('../controllers/checkoutController');

const router = Router();
checkoOut

router.post('/', checkoOut);

module.exports = router;