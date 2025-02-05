import express from 'express';
import { verifyToken } from '../middleware/firebaseAuth'; 
import { getJobs, createJob } from '../controllers/jobs';

const router = express.Router();

// ✅ Use `verifyToken` correctly as middleware
router.use(verifyToken); 

router.get('/', getJobs);
router.post('/', createJob);

export default router;

