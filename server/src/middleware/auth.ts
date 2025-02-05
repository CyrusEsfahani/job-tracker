import { Request, Response, NextFunction } from 'express';
import admin from 'firebase-admin';

declare global {
    namespace Express {
      interface Request {
        user?: admin.auth.DecodedIdToken;
      }
    }
  }
  

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader?.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];
    const decodedToken = await admin.auth().verifyIdToken(token);
    
    req.user = decodedToken;

    
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};