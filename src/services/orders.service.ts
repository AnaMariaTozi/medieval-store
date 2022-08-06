import OrdersModel from '../models/orders.model';

import { Order } from '../interfaces/orders.interface';
import connection from '../models/connection';

export default class OrdersService {
  public ordersModel: OrdersModel;

  constructor(model: OrdersModel = new OrdersModel(connection)) {
    this.ordersModel = model;
  }

  public async create(order: number) {
    return this.ordersModel.create(order);
  }

  public async getAll(): Promise<Order[]> {
    return this.ordersModel.getAll();
  } 
}
