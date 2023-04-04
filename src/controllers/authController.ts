import { Request, Response } from "express";
import { generateAuthToken } from "../services/tokenService";
import { getUserByEmail, registerNewUser } from '../services/dbService';

export function register(req: Request, res: Response): void {
  registerNewUser(
    req.body,
    () => { res.send('Successfully created a users.') },
    (err) => { res.status(400).send(err.sqlMessage) }
  )
}

export function login(req: Request, res: Response): void {
  getUserByEmail(req.body.email).then((result: any) => {
    if (result.password === req.body.password) {
      res.send(generateAuthToken({ id: result.id }))
      return
    }
    res.status(400).send("Wrong credentials.")
  })
}
