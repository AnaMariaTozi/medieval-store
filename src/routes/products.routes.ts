import { Router } from 'express';

import ProductsController from '../controllers/products.controller';

const productsRouter = Router();

const productsController = new ProductsController();

productsRouter.get('/restaurants', (req, res) => productsController.getAll(req, res));

export default productsRouter;
