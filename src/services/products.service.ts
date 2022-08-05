import ProductsModel from '../models/products.model';
import connection from '../models/connection';
import { Product } from '../interfaces/products.interface';

export default class ProductService {
  public productModel: ProductsModel;

  constructor(model: ProductsModel = new ProductsModel(connection)) {
    this.productModel = model;
  }

  public async getAll(): Promise<Product[]> {
    return this.productModel.getAll();
  } 

  public async create(product: Product): Promise<Product> {
    return this.productModel.create(product);
  } 
}
