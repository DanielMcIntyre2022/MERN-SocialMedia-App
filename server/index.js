import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/posts', postRoutes)

const connectionStr = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PSW}@cluster0.omkokcu.mongodb.net/?retryWrites=true&w=majority`

const PORT = process.env.PORT || 5000;

mongoose.connect(connectionStr, { useNewUrlParser: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((err) => console.log(err)); 

