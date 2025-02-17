import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import {v2 as cloudinary} from 'cloudinary'; 

import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import postRoutes from './routes/post.routes.js';
import notificationRoutes from './routes/notification.routes.js';


import connectMongoDB from './db/connectMongoDB.js';


dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})
console.log(process.env.CLOUDINARY_API_KEY);

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json({limit: '5mb'})); // to parse req.body
app.use(express.urlencoded({ extended: true })); //to pass form data(urlrncoded)

app.use(cookieParser());



app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/notifications', notificationRoutes)


app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
  connectMongoDB();
})