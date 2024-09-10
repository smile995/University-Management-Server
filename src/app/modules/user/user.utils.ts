import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import UserModel from "./user.model";

const findLastStudent = async () => {
  const result = await UserModel.findOne({ role: "student" }, {
    id: 1,
    name: 1
  }).sort({ createAt: -1 }).lean()
  return result?.id ? result.id : undefined
}
export const generateStudentId = async (payload: TAcademicSemester) => {
  let currentId = (0).toString();
  const lastStudent = await findLastStudent();
  const lastStudentYear = lastStudent?.substring(0, 4);
  const lastStudentCode = lastStudent?.substring(4, 6);
  const { year, code } = payload
  if (lastStudent && lastStudentYear == year && lastStudentCode == code) {
    currentId = lastStudent.substring(6)
  }
  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
  incrementId = `${payload.year}${payload.code}${incrementId}`
  return incrementId
  // incrementId = `${payload.year}${payload.code}${incrementId}`;

};