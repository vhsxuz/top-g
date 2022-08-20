import { NextFunction, Request, Response } from 'express'

export const register = async(req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({
    success: true, 
    msg: 'Registration Success'
  });
}

export const login = async(req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({
    success: true, 
    msg: 'Login Success'
  });
}