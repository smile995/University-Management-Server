import { NextFunction, Request, Response } from 'express';
import { StudentServices } from './student.service';




const getAllStudents = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'Students are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getSingleStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { studentId } = req.params;

    const result = await StudentServices.getSingleStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student is retrieved succesfully',
      data: result,
    });
  } catch (error) {
    next(error)
  }
};

const deleteAStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.deleteAStudent(studentId)
    res.status(200).json({
      success: true,
      message: 'Student is deleted succesfully',
      data: result,

    })
  } catch (error) {
    next(error)
  }

}

export const StudentControllers = {

  getAllStudents,
  getSingleStudent,
  deleteAStudent,
};
