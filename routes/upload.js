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
        const ext = path.extname(file.originalname);
        cb(null, Date.now() + ext); // Generate a unique filename
    }
});

const upload = multer({ storage });

router.post('/upload', upload.single('image'), async (req, res) => {
    try{
        const { tag } = req.body;
        const { filename } = req.file;

        if (!tag || !filename ) {
            throw new Error('Tag and filename are required.');
        }

        const newImage = new Image({ filename, tag });
        await newImage.save();

        res.json({ id: newImage._id, filename, tag });
    } catch (err) {
        console.error('Error during image upload:', err);
        res.status(500).json({ error: err.message });
    }
});

router.get('/images', async (req, res) => {
    try {
        const { tag } = req.query;

        if (!tag) {
            throw new Error('Tag parameter is required for fetching images.');
        }

        const images = await Image.find({ tag }).exec();
        res.json(images);
    } catch (err) {
        console.error('Error fetching images:', err);
        res.status(500).json({ error: err.message });
    }
});

export default router;