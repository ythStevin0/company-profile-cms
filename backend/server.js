import express from 'express';
import cors from 'cors';
import connectDB from './src/config/db.js';
import { env } from './src/config/env.js';
import serviceRoutes from './src/modules/services/services.routes.js';
import portfolioRoutes from './src/modules/portfolio/portfolio.routes.js';
import messageRoutes from './src/modules/messages/messages.routes.js';
import authRoutes from './src/modules/auth/auth.routes.js';
import protect from './src/middleware/auth.middleware.js';

const app = express();

app.use(cors({
    origin: (origin, callback) => {
        const allowedOrigins = [
            "http://localhost:5173",
            "https://company-profile-cms-gamma.vercel.app"
        ];
        // Izinkan jika tidak ada origin (seperti mobile apps/Postman) atau origin ada di list atau dari vercel.app
        if (!origin || allowedOrigins.includes(origin) || origin.endsWith(".vercel.app")) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true
}));
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/messages', messageRoutes);  

app.get("/", (req, res) => {
    res.send("Company Profile API is running");
});

const startServer = async () => {
    await connectDB();

    app.listen(env.PORT, () => {
        console.log(`Server is running on port ${env.PORT}`);
    });
};

startServer().catch((error) => {
    console.error(error.message);
    process.exit(1);
});
