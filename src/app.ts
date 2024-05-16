import express from 'express';
import authRoutes from './routes/authRoutes';
import itemRoutes from './routes/itemRoutes';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', authRoutes);
app.use('/api', itemRoutes);

export default app;
