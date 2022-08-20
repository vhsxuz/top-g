// external dependencies
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from "cors";
import cookieParser from 'cookie-parser';

dotenv.config();
require('express-async-errors');

const app: Express = express();
const port = process.env.PORT || 8000;

// External Middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(morgan("dev"));

app.get('/', (req, res, next) => {
  res.status(200).json({success: true});
});

app.listen(port, () => {
  console.log(`[*] Server listening on port ${port}`);
});