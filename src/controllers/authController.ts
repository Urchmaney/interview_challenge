import { Request, Response } from "express";
import { generateAuthToken } from "../services/tokenService";
import { getUserByEmail, registerNewUser } from '../services/dbService';
import { User } from "../models/interfaces";
import { successObject, errorObject } from "../utils/helpers";

export function register(req: Request, res: Response): void {
  registerNewUser(
    req.body,
    () => { res.status(201).json(successObject('Successfully created a users.', { name: '' } )) },
    (err) => { res.status(400).json(errorObject("Error Registering.", err.sqlMessage)) }
  )
}

export function login(req: Request, res: Response): void {
  getUserByEmail(req.body.email).then((result: User | undefined) => {
    if (result && result.password === req.body.password) {
      res.status(200).send(successObject("Successfully Logged in.", { token: generateAuthToken({ userId: result.id }) } ))
      return
    }
    res.status(400).json(errorObject("Error Logging In.", "Invalid credentials."))
  })
}
