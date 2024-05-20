import mongoose from 'mongoose';
import app from './app,js';

const PORT = process.env.PORT || 3000;

// connect to MongoDB
mongoose.connect("mongodb+srv://websharerUser:websharer@cluster-k-dot.kgz547p.mongodb.net/ClimateCloset", {
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