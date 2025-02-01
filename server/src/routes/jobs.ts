import { Router } from 'express';
import {
  createJob,
  getJobs,
  updateJob,
  deleteJob
} from '../controllers/jobs';
import authMiddleware from '../middleware/auth';

const router = Router();

router.use(authMiddleware);

router.post('/', createJob);
router.get('/', getJobs);
router.put('/:id', updateJob);
router.delete('/:id', deleteJob);

export default router;