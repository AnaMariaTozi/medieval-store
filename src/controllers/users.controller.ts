import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import UsersService from '../services/users.service';

export default class UsersController {
  constructor(private usersService = new UsersService()) { }

  public create = async (req: Request, res: Response) => {
    const user = req.body;
    const userCreated = await this.usersService.create(user);
    res.status(StatusCodes.CREATED).json(userCreated);
  };
}
