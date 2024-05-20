import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

//import usersRouter from './routes/users.js';
import uploadRouter from './routes/upload.js';
import apiRouter from './routes/weather.js';

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

//app.use('/users', usersRouter);
app.use('/', uploadRouter);

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});
app.use('/api', apiRouter);

export default app;
