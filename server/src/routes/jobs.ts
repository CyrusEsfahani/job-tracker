import express, { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../middleware/firebaseAuth'; 
import { getJobs, createJob } from '../controllers/jobs';

const router = express.Router();

// ✅ Explicitly define `verifyToken` as middleware
const typedVerifyToken = (req: Request, res: Response, next: NextFunction): void => {
  verifyToken(req, res, next);
};

router.use(typedVerifyToken); // ✅ Fix TypeScript error

router.get('/', getJobs);
router.post('/', createJob);

export default router;
