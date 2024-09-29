import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import catsRoutes from './routes/cats.routes';
import usersRoutes from './routes/users.routes';
import imagesRoutes from './routes/images.routes';
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', catsRoutes);
app.use('/api', usersRoutes);
app.use('/api', imagesRoutes);
mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));

export default app;
