import { Request, Response } from 'express';
import { getBreeds, getBreedById, searchBreeds } from '../services/cats.service';

export const getBreedsList = async (req: Request, res: Response) => {
  const breeds = await getBreeds();
  res.json(breeds);
};

export const getBreed = async (req: Request, res: Response) => {
  const { breed_id } = req.params;
  const breed = await getBreedById(breed_id);
  res.json(breed);
};

export const searchBreed = async (req: Request, res: Response) => {
  const { query } = req.query;
  const breeds = await searchBreeds(query as string);
  res.json(breeds);
};
