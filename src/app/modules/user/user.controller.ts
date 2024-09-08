import { NextFunction, Request, Response } from "express";

import { userServices } from "./user.service";


const createStudent = async (req: Request, res: Response,next:NextFunction) => {
try{
  const {password,student}=req.body

const newStudent= await userServices.createStudentIntoDB(password,student);
res.status(200).json({
  "success":true,
  "message":"Student Created Successfully",
  "data":newStudent
})
}catch(error){
  next(error)
}


}

export const userController = {
  createStudent
}