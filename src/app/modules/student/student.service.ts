import { Student } from './student.interface';
import { StudentModel } from './student.model';

// create a new student into database
const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

// get all the student from database
const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

// get a specific student from DB  by unique ID
const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
