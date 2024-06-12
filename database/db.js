// db.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
mongoose.set('strictQuery', false);
export const Connection = () => {
  const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_DATABASE, MONGO_HOST } = process.env;

  const mongoURI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DATABASE}`;

  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.once('open', () => {
    console.log('MongoDB connected successfully');
  });
};

// Other exports or code in the file if needed
