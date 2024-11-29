import mongoose, {mongo} from "mongoose";
import dotenv from "dotenv";
require('dotenv').config();

async function conectaNaDatabase(){
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    return mongoose.connection;
}

export default conectaNaDatabase;