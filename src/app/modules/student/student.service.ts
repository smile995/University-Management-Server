import { startSession } from 'mongoose';
import { Student } from './student.interface';
import { StudentModel } from './student.model';
import UserModel from '../user/user.model';

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find().populate('user').populate("admissionSemester").populate({
    path: 'academicDepartment',
    populate: {
      path: 'academicFaculty'
    }
  });
  return result;
};

// get a specific student from DB  by unique ID
const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id }).populate('user').populate("admissionSemester").populate({
    path: 'academicDepartment',
    populate: {
      path: 'academicFaculty'
    }
  })
  return result;
};
const updateSingleStudentIntoDB = async (id: string, student: Partial<Student>) => {
  const { name, guardian, localGuardian, ...remainingStudentData } = student;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingStudentData,
  };


  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiedUpdatedData[`name.${key}`] = value;
    }
  }

  else if (guardian && Object.keys(guardian).length) {
    for (const [key, value] of Object.entries(guardian)) {
      modifiedUpdatedData[`guardian.${key}`] = value;
    }
  }

  else if (localGuardian && Object.keys(localGuardian).length) {
    for (const [key, value] of Object.entries(localGuardian)) {
      modifiedUpdatedData[`localGuardian.${key}`] = value;
    }
  }

  const result = await StudentModel.updateOne({id}, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });
  return result;
};

// delete a specific student
const deleteAStudent = async (id: string) => {
  const session = await startSession()
  try {
    session.startTransaction()
    const deleteAStudent = await StudentModel.updateOne({ id: id }, { isDeleted: true },
      { new: true, session }
    );
    if (!deleteAStudent) {
      throw Error("Faild to delete student")
    }

    const deletedUser = await UserModel.updateOne({ id: id }, { isDeleted: true },
      { new: true, session })
    if (!deletedUser) {
      throw Error("Faild to delete suer")
    }
    await session.commitTransaction();
    await session.endSession();
    return "User and Student deleted from Database softly"
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
  }
}

export const StudentServices = {

  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteAStudent,
  updateSingleStudentIntoDB
};
