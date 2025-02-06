import 'dotenv/config';

// Verify env loading
console.log('ENV CHECK:', {
  projectId: process.env.FIREBASE_PROJECT_ID?.slice(0, 6),
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL?.slice(0, 6),
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.slice(0, 20)
});



import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// import authRoutes from './routes/auth';
import jobRoutes from './routes/jobs';
// import jobBoardRoutes from './routes/jobBoard';
// import errorHandler from './middleware/error';
import admin from './utils/firebase';

const envResult = dotenv.config();
if (envResult.error) {
  console.error('❌ .env ERROR:', envResult.error);
  process.exit(1);
}

// Verify Firebase variables exist
console.log('✅ Loaded FIREBASE_PROJECT_ID:', !!process.env.FIREBASE_PROJECT_ID);
console.log('✅ Loaded FIREBASE_CLIENT_EMAIL:', !!process.env.FIREBASE_CLIENT_EMAIL);
console.log('✅ Loaded FIREBASE_PRIVATE_KEY:', !!process.env.FIREBASE_PRIVATE_KEY?.slice(0, 20) + '...');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
const MONGO_URI = process.env.MONGODB_URI || '';

if (!MONGO_URI) {
  console.error('❌ MONGO_URI is missing. Please add it to your .env file.');
  process.exit(1);
}

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));
// Routes
// app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);
// app.use('/api/job-board', jobBoardRoutes);
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
// app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});