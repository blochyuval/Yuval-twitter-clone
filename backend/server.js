import express from 'express';
import authRoutes from './routes/auth.routes.js';
import dotenv from 'dotenv';
import connectMongoDB from './db/connectMongoDB.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000



app.use('/api/auth', authRoutes);

app.listen(PORT, (req,res) => {
  console.log(`server is running on http://localhost:${PORT}`);
  connectMongoDB();
})