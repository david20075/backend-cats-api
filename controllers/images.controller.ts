import { Request, Response } from 'express';
import { getImagesByBreedId } from '../services/images.service';

export const getImages = async (req: Request, res: Response) => {
  const { breed_id } = req.query;
  const images = await getImagesByBreedId(breed_id as string);
  res.json(images);
};
