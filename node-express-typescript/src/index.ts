import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { Dogclass } from "./DogClass"
dotenv.config();
import Router from './routes'
const app: Express = express();
const port = process.env.PORT;
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(Router);


// app.post
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running? at https://localhost:${port}`);
});