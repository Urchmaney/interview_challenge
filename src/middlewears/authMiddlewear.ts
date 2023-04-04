import { NextFunction, Request, Response } from "express";
import { AuthRequest } from '../models/custom';
import { decodeAuthToken } from "../services/tokenService";



export function tokenAuthMiddlewear (req: Request, res: Response, next: NextFunction) : void {
  if(!req.headers.authorization) {
    res.status(401).send("Unauthorized Request");
    return;
  }
  const token = req.headers.authorization?.split(' ')[1];
  const decoded = decodeAuthToken(token);
  if(!decoded) {
    res.status(401).send("Unauthorized Request");
    return;
  }

  (req as AuthRequest).userId = decoded.id;
  next()
}
