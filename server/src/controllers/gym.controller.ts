import { PrismaClient } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import { BadRequestError, AuthenticationError } from '../errors';

const prisma = new PrismaClient();

export const gymsList = async (req: Request, res: Response, next: NextFunction) => {
  const gymList = await prisma.gym.findMany({});
  return res.status(200).json({
    success: true,
    msg: 'Gym List Request Success',
    gymList: gymList,
  });
}

export const gymDetails = async (req: Request, res: Response, next: NextFunction) => {
  const gymId = req.params.id
  if(!gymId || typeof(gymId) != 'string') {
    throw new BadRequestError("Gym ID not valid");
  }
  const gymInfo = await prisma.gym.findUnique({
    where: {
      id: gymId,
    }
  });
  return res.status(200).json({
    success: true,
    msg: 'Gym List Request Success',
    gymInfo: gymInfo,
  });
}