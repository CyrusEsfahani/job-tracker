import express from 'express';
import { verifyToken } from '../middleware/firebaseAuth';
import { getJobs, createJob } from '../controllers/jobsController';

const router = express.Router();

router.use(verifyToken); // Protect all job routes

router.get('/', getJobs);
router.post('/', createJob);

export default router;