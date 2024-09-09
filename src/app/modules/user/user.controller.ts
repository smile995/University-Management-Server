import { RequestHandler } from "express";

import { userServices } from "./user.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";


const createStudent: RequestHandler = catchAsync(async (req, res, next) => {
  const { password, student } = req.body
  const newStudent = await userServices.createStudentIntoDB(password, student);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student Created successfully",
    data: newStudent
  })
})

export const userController = {
  createStudent
}