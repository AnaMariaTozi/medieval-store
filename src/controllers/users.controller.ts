import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import JwtService from '../services/jwt.service';

import UsersService from '../services/users.service';

export default class UsersController {
  constructor(
    private usersService = new UsersService(),
    private jwtCreate = new JwtService(),
  ) { }

  public create = async (req: Request, res: Response) => {
    const user = await this.usersService.create(req.body);
    const token = this.jwtCreate.createToken(user);
    res.status(StatusCodes.CREATED).json({ token });
  };
}
