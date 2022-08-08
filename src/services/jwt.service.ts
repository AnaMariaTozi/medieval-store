import { sign } from 'jsonwebtoken';
import { User } from '../interfaces/users.interface';

export default class JwtService {
  constructor(private jwtSecret = 'mySecret') { }

  public createToken = (user: User) => {
    const token = sign({ user }, this.jwtSecret);
    return token;
  };
}
