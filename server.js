import mongoose from 'mongoose';
import app from './app,js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// connect to MongoDB
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connected to mMongoDB');

    app.listen(PORT, () => {
        console.log(`sever running at http://localhost:${PORT}/`)
    });
}).catch(err => {
    console.error('failed to connect to MongoDB', err);
});