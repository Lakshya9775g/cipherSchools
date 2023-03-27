import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv' ;
dotenv.config()

import cookieParser from "cookie-parser";
import cors from 'cors'

import authRoutes from './routes/auth.js';
import usersRoutes from './routes/users.js';


const app = express(); //server creation



const DB  = process.env.DB_LINK;
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/auth", authRoutes); //middleware
app.use("/api/users", usersRoutes); //middleware

//Data base connection
mongoose.set("strictQuery", false);
mongoose.connect(DB)
    .then(()=>{
        console.log(`connection to db sucessful`);
    }).catch((err)=>console.log(err))




//server listing to the port
app.listen(port, ()=>{
    console.log(`Server is running on Port no: ${port}`);
})