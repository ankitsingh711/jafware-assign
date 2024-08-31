import express, { Application } from 'express';
import cors from 'cors';
import connectDB from './config/db';
import customerRoutes from './routes/customerRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', customerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
