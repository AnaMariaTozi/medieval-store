import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Product } from '../interfaces/products.interface';

export default class ProductModel {
  private connection: Pool;

  public constructor(connection: Pool) {
    this.connection = connection;
  }
  
  public async getAll(): Promise<Product[]> {
    const result = await this.connection.execute('SELECT * FROM products');
    const [rows] = result;
    return rows as Product[];
  }
}