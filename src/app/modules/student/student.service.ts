import { Student } from './student.interface';
import { StudentModel } from './student.model';

// create a new student into database


// get all the student from database
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

// delete a specific student
const deleteAStudent = async (id: string) => {
  const result = await StudentModel.updateOne({ id: id }, { isDeleted: true })
  return result
}

export const StudentServices = {

  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteAStudent,
};
