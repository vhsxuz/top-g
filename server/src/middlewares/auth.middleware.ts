import express, { Express, Request, Response, NextFunction } from 'express';
import AuthenticationError from '../errors/auth-error';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { CustomError } from '../errors';
dotenv.config();

export default async(req: Request, res: Response, next: NextFunction) => {
  const authHeader: string | undefined = 'Bearer ' + req.cookies.refreshToken; 
  const token = authHeader.split(' ')[1];
  if(!token) {
    throw new AuthenticationError('Token not available'); 
  }
  if(!process.env.JWT_SECRET) {
    throw new CustomError('Key not provided');
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    console.log(decoded);
    if(err) {
      throw new AuthenticationError('Credentials not valid')
    }
    if(!decoded || typeof(decoded) == 'string') {
      throw new AuthenticationError('Credentials not valid');
    }
    if(!decoded.id) {
      throw new AuthenticationError('Credentials not valid');
    }
    const { id } = decoded;
    req.body.id = id;
  })

  return next();
}
