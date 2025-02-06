"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
// Verify env loading
console.log('ENV CHECK:', {
    projectId: process.env.FIREBASE_PROJECT_ID?.slice(0, 6),
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL?.slice(0, 6),
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.slice(0, 20)
});
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
// import authRoutes from './routes/auth';
const jobs_1 = __importDefault(require("./routes/jobs"));
// import jobBoardRoutes from './routes/jobBoard';
// import errorHandler from './middleware/error';
const firebase_1 = __importDefault(require("./utils/firebase"));
const envResult = dotenv_1.default.config();
if (envResult.error) {
    console.error('❌ .env ERROR:', envResult.error);
    process.exit(1);
}
// Verify Firebase variables exist
console.log('✅ Loaded FIREBASE_PROJECT_ID:', !!process.env.FIREBASE_PROJECT_ID);
console.log('✅ Loaded FIREBASE_CLIENT_EMAIL:', !!process.env.FIREBASE_CLIENT_EMAIL);
console.log('✅ Loaded FIREBASE_PRIVATE_KEY:', !!process.env.FIREBASE_PRIVATE_KEY?.slice(0, 20) + '...');
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Database Connection
const MONGO_URI = process.env.MONGODB_URI || '';
if (!MONGO_URI) {
    console.error('❌ MONGO_URI is missing. Please add it to your .env file.');
    process.exit(1);
}
mongoose_1.default.connect(MONGO_URI)
    .then(() => console.log('✅ MongoDB connected'))
    .catch(err => console.error('❌ MongoDB connection error:', err));
// Routes
// app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobs_1.default);
// app.use('/api/job-board', jobBoardRoutes);
app.use(async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader?.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1];
        try {
            const decodedToken = await firebase_1.default.auth().verifyIdToken(token);
            req.user = decodedToken;
        }
        catch (error) {
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
