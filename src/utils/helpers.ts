import { ErrorResponse, SuccessResponse } from "../models/custom";

export const successObject = (msg: string, data: { [key:string]: any }) : SuccessResponse => {
  return {
    message: msg,
    data: data
  }
}

export const errorObject = (msg: string, desc: string) : ErrorResponse => {
  return {
    message: msg,
    description: desc
  }
}