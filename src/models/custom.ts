import { Request } from "express";

export interface AuthRequest extends Request {
  userId? : number;
}

export interface TokenData {
  userId: number;
}