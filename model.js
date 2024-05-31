import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;


await mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
  process.exit(1);
});

const imageSchema = new mongoose.Schema({
    filename: { type: String, required: true },
    tag: { type: String, required: true }
});

const Image = mongoose.model('Image', imageSchema);

export { Image };
