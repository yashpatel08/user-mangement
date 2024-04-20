import mongoose from 'mongoose';
import cors from 'cors';
import express from 'express';


const connectDB = async() => {
    const app = express();

    app.use(cors());      
    
    app.use(cors({
        origin: 'https://url.vercel.app'
      }));
    
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

export default connectDB
