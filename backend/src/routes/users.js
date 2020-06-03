import { Router } from 'express';
const router = Router();

import { createUser } from '../controllers/user.controller';

// /api/users/
router.post('/', createUser);

export default router;