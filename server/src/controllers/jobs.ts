import { Request, Response } from 'express';
import Job from '../models/job';
import admin from 'firebase-admin';

declare global {
  namespace Express {
    interface Request {
      user?: admin.auth.DecodedIdToken;
    }
  }
}

export const createJob = async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = req.user?.uid;
      if (!userId) {
        res.status(401).json({ error: 'Unauthorized: No user ID found' });
        return;
      }
  
      const job = new Job({
        ...req.body,
        userId
      });
  
      await job.save();
      res.status(201).json(job);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error: 'An unknown error occurred' });
      }
    }
  };

  export const getJobs = async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = req.user?.uid;
      if (!userId) {
        res.status(401).json({ error: 'Unauthorized: No user ID found' });
        return;
      }
  
      const jobs = await Job.find({ userId });
      res.status(200).json(jobs);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred' });
      }
    }
  };

export const updateJob = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.uid;
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized: No user ID found' });
    }

    const job = await Job.findOneAndUpdate(
      { _id: req.params.id, userId }, // ✅ Ensure `userId` is properly checked
      req.body,
      { new: true }
    );

    if (!job) return res.status(404).json({ error: 'Job not found' });
    res.json(job);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};

export const deleteJob = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.uid;
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized: No user ID found' });
    }

    const job = await Job.findOneAndDelete({
      _id: req.params.id,
      userId
    });

    if (!job) return res.status(404).json({ error: 'Job not found' });
    res.json({ message: 'Job deleted' });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};
