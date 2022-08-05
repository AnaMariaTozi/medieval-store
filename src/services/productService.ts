import ProductsModel from '../models/ProductModel';
import connection from '../models/connection';
import { Product } from '../interfaces/products.interface';

export default class ProductService {
  public productModel: ProductsModel;

  constructor(model: ProductsModel = new ProductsModel(connection)) {
    this.productModel = model;
  }

  getAll = async (): Promise<Product[]> => this.productModel.getAll();
}