import { User } from '../models/user.model';

export const login = async (username: string, password: string) => {
  const user = await User.findOne({ username, password });
  return user;
};

export const register = async (username: string, password: string) => {
  const newUser = new User({ username, password });
  return await newUser.save();
};
