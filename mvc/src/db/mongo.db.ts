import { connect } from "mongoose";
import mongoose from "mongoose";
import "dotenv/config";
mongoose.set('strictQuery', false);

const DB_URI = `${process.env.DB_URI}`;
const dbInit = async()=>{
    await connect(DB_URI);
    console.log("Database is ready.");
    
}

export default dbInit;