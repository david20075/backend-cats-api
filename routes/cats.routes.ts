import { Router } from 'express';
import { getBreedsList, getBreed, searchBreed } from '../controllers/cats.controller';

const router = Router();

router.get('/breeds', getBreedsList);
router.get('/breeds/:breed_id', getBreed);
router.get('/breeds/search', searchBreed);

export default router;
