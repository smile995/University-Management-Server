import { TAcademicSemester } from './../academicSemester/academicSemester.interface';

import config from "../../config";
import { Student } from "../student/student.interface";
import { StudentModel } from "../student/student.model";
import UserModel from "./user.model";
import { TUser } from "./user.interface";
import { AcademicSemesterModel } from "../academicSemester/academicSemester.model";
import { generateStudentId } from "./user.utils";
import { startSession } from 'mongoose';

const createStudentIntoDB = async (password: string, student: Student) => {
  const session = await startSession();;

  try {
    session.startTransaction()
    let userData: Partial<TUser> = {};
    // find a semester by id that this semester is exists or not
    const ASemester = await AcademicSemesterModel.findById(student.admissionSemester)
    // set the password
    userData.password = password || (password = config.default_pass as string)
    userData.role = 'student';
    if (ASemester) {
      userData.id = await generateStudentId(ASemester)
      // student.id = await generateStudentId(ASemester)
    }
    // create user
    const newUser = await UserModel.create([userData], { session })
    // create a student
    if (!newUser) {
      throw Error ("Failed to create user")
    }
    else {
      student.user = newUser[0]._id //replace user objectId id by user _id
      student.id = newUser[0].id //replace user objectId id by user _id
    }
    // creating a new student
    const newStudent = await StudentModel.create([student], { session })
    if (!newStudent) {
      throw  Error('Failed to create student')
    }
    else {
      await session.commitTransaction()
      await session.endSession()
    }
    return newStudent
  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
    throw Error("Failed to create student")
  }
};

export const userServices = {
  createStudentIntoDB
}

