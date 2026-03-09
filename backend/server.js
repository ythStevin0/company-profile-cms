import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
import serviceRoutes from './src/modules/services/services.routes.js';

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Company Profile API is running");
});

app.use('/api/services', serviceRoutes);

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});