import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// import authRoutes from './routes/auth';
import jobRoutes from './routes/jobs';
// import jobBoardRoutes from './routes/jobBoard';
// import errorHandler from './middleware/error';
import admin from './utils/firebase';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGODB_URI!)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/job-board', jobBoardRoutes);
app.use(async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader?.startsWith('Bearer ')) {
      const token = authHeader.split(' ')[1];
      try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        req.user = decodedToken;
      } catch (error) {
        console.error('Token verification failed:', error);
      }
    }
    next();
  });

// Error Handling
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});