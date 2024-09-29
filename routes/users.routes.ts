import { Router } from 'express';
import { loginUser, registerUser } from '../controllers/users.controller';

const router = Router();

router.get('/login', loginUser);
router.get('/register', registerUser);

export default router;
