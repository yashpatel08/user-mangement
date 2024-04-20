import mongoose from "mongoose";

let cachedDb = null;

export const connectDB = async () => {
    if (cachedDb) {
        return cachedDb;
    }

    try {
        const db = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log("Connected to MongoDB Atlas"); 
        cachedDb = db;
        return db;
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};