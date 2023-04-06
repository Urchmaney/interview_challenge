import { Request } from "express";

export interface AuthRequest extends Request {
  userId? : number;
}

export interface TokenData {
  userId: number;
}

export interface SuccessResponse {
  message: string;
  data: { [key: string]: any };
}

export interface ErrorResponse {
  message: string;
  description: string;
}