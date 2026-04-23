import mongoose from 'mongoose';
import { env } from './env.js';

const connectDB = async () => {
    try {
        await mongoose.connect(env.MONGO_URI);
        console.log('MongoDB connected');
    } catch (error) {
        if (error?.code === 8000 || /authentication failed/i.test(error?.message || '')) {
            throw new Error('MongoDB authentication failed. Update MONGO_URI in backend/.env with a valid connection string.');
        }

        throw new Error(`MongoDB connection failed: ${error.message}`);
    }
};

export default connectDB;
