const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const productsRouter = require('./productsRouter.js');
const categoriesRouter = require('./categoriesRouter.js');
const usersRouter = require('./usersRouter.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/products', productsRouter);
router.use('/categories', categoriesRouter);
router.use('/users', usersRouter);
module.exports = router;
