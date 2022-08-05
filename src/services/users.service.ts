import UserModel from '../models/users.model';
import connection from '../models/connection';
import { User } from '../interfaces/users.interface';

export default class UserService {
  public userModel: UserModel;

  constructor(model: UserModel = new UserModel(connection)) {
    this.userModel = model;
  }

  public async create(user: User): Promise<User> {
    return this.userModel.create(user);
  }
}