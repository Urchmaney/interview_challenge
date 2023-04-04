import { Request, Response } from "express";
import { generateAuthToken } from "../services/tokenService";
import { getUserByEmail, registerNewUser } from '../services/dbService';
import { User } from "../models/interfaces";

export function register(req: Request, res: Response): void {
  registerNewUser(
    req.body,
    () => { res.send('Successfully created a users.') },
    (err) => { res.status(400).send(err.sqlMessage) }
  )
}

export function login(req: Request, res: Response): void {
  getUserByEmail(req.body.email).then((result: User | undefined) => {
    if (result && result.password === req.body.password) {
      res.send(generateAuthToken({ userId: result.id }))
      return
    }
    res.status(400).send("Wrong credentials.")
  })
}
