import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import ProductsService from '../services/products.service';

export default class ProductsController {
  public service: ProductsService;

  constructor(service: ProductsService = new ProductsService()) {
    this.service = service;
  }

  public async getAll(req: Request, res: Response): Promise<Response> {
    const products = await this.service.getAll();
    return res.status(StatusCodes.OK).json(products);
  }

  public async create(req: Request, res: Response) {
    const product = req.body;
    const productCreated = await this.service.create(product);
    res.status(StatusCodes.CREATED).json(productCreated);
  }
}