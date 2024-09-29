import { Router } from 'express';
import { getImages } from '../controllers/images.controller';

const router = Router();

// Ruta para obtener imágenes de una raza específica
router.get('/imagesbybreedid', getImages);

export default router;
