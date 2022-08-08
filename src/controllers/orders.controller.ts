import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import OrdersService from '../services/orders.service';

export default class OrdersController {
  constructor(private ordersService = new OrdersService()) { }

  public create = async (req: Request, res: Response) => {
    const order = req.body;
    const orderCreated = await this.ordersService.create(order);
    return res.status(StatusCodes.CREATED).json(orderCreated);
  };
    
  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.ordersService.getAll();
    return res.status(StatusCodes.OK).json(orders);
  };
}