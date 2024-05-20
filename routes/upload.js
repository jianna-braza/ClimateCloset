import express from 'express';
import multer from 'multer';
import path from 'path';
import { Image } from '../model.js';

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.orignalname));
    }
});

const upload = multer({ storage });

router.post('/upload', upload.single('image'), async (req, res) => {
    try{
        const { tag } = req.body;
        const { filename } = req.file;

        const newImage = new Image({ filename, tag });
        await newImage.save();

        res.json({ id: newImage._id, filename, tag });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/images', async (req, res) => {
    try {
        const { tag } = req.query;
        const images = await Image.find({ tag }).exec();
        res.json(images);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;