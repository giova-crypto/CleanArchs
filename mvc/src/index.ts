import path from "path";
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import dbInit from "./db/mongo.db";
import userRoute  from "./routes/user.router";
import { Response } from "express";

dotenv.config({path: path.resolve(__dirname,"../.env")});
const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

const port = process.env.PORT || 3002;

app.use(userRoute);
dbInit().then();
app.listen(port, ()=>{
    console.log(`Server started, listening on port: ${ port }`);
})
