import { Router } from 'express';
import { gymsList, gymDetails } from '../controllers/gym.controller';

const router = Router();

router.route('/').get(gymsList);
router.route('/:id').get(gymDetails);

export default router;