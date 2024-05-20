// models/model.js
import mongoose from 'mongoose';

await mongoose.connect("mongodb+srv://websharerUser:websharer@cluster-k-dot.kgz547p.mongodb.net/ClimateCloset", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const imageSchema = new mongoose.Schema({
    filename: { type: String, required: true },
    tag: { type: String, required: true }
});

const Image = mongoose.model('Image', imageSchema);

export { Image };
