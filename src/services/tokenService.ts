import { APP_SECRET } from "../utils/constants";
import { TokenData } from "../models/custom";
const jwt = require('jsonwebtoken');

export function generateAuthToken (payload: TokenData) : string {
  return jwt.sign(payload, APP_SECRET);
}

export function decodeAuthToken(token: string): TokenData {
  return jwt.verify(token, APP_SECRET);
}