import { APP_SECRET } from "../utils/constants";
const jwt = require('jsonwebtoken');

export function generateAuthToken (payload: any) : string {
  return jwt.sign(payload, APP_SECRET);
}

export function decodeAuthToken(token: string): any {
  return jwt.verify(token, APP_SECRET);
}