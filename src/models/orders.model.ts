import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Order } from '../interfaces/orders.interface';

export default class OrderModel {
  private connection: Pool;

  public constructor(connection: Pool) {
    this.connection = connection;
  }
    
  public async create(userId: number) {
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
      [userId],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return insertId;
  }
    
  public async getAll(): Promise<Order[]> {
    const result = await this.connection.execute(
      `SELECT O.id, O.userId, JSON_ARRAYAGG(P.id) AS productsIds
            FROM 
            Trybesmith.Orders AS O
            JOIN 
            Trybesmith.Products AS P 
            ON O.id = P.orderId
            GROUP BY O.id
            ORDER BY O.userId`,
    );
    const [rows] = result;
    return rows as Order[];
  }
}
