import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
import serviceRoutes from './src/modules/services/services.routes.js';
import portfolioRoutes from './src/modules/portfolio/portfolio.routes.js';
import messageRoutes from './src/modules/messages/messages.routes.js';
import authRoutes from './src/modules/auth/auth.routes.js';
import protect from './src/middleware/auth.middleware.js';

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/messages', protect, messageRoutes);  

app.get("/", (req, res) => {
    res.send("Company Profile API is running");
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});