import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

const connectionStr = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PSW}@cluster0.omkokcu.mongodb.net/?retryWrites=true&w=majority`

const PORT = 5000;

mongoose.connect(connectionStr, { useNewUrlParser: true }).then(() => console.log('connected to mongoDB')).catch(err => console.log(err)); 

app.listen(() => {
    console.log(`Server running on port ${PORT}`);
})