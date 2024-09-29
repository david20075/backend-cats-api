import { Request, Response } from 'express';
import { login, register } from '../services/users.service';

export const loginUser = async (req: Request, res: Response) => {
  const { username, password } = req.query;
  const user = await login(username as string, password as string);
  if (user) {
    res.json(user);
  } else {
    res.status(401).send('Unauthorized');
  }
};

export const registerUser = async (req: Request, res: Response) => {
  const { username, password } = req.query;
  const newUser = await register(username as string, password as string);
  res.json(newUser);
};
