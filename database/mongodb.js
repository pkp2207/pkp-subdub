import mongoose from "mongoose";
import {DB_URI, NODE_ENV} from '../config/env.js';

if(!DB_URI){
    throw new Error('DB_URI must be defined.');
}

const connectToDatabase = async() => {
    try{
        await mongoose.connect(DB_URI);
        console.log(`Connected to the database in ${NODE_ENV} mode`);
    } catch(err){
        console.error(`Failed to connect to the database: ${err.message}`);
        process.exit(1);
    }
} 

export default connectToDatabase; 