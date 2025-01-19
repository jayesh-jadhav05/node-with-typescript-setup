import mongoose from 'mongoose';
import { config } from '../config/config';

const connectDB = async () => {
  try {
    await mongoose.connect(config.MONGO_URI || '');
    console.log('DB Connected Successfully !!!');
  } catch (error) {
    console.log('DB connection failed');
  }
};

connectDB();
