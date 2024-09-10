import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import UserModel from "./user.model";

const findLastStudent = async () => {
  const result = await UserModel.findOne({ role: "student" }, {
    id: 1,
  }).sort({ createAt: -1 })
  return result?.id ? result.id : undefined
}
export const generateStudentId = async (payload: TAcademicSemester) => {
  let currentId = await findLastStudent()|| (0).toString();
  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
  incrementId = `${payload.year}${payload.code}${incrementId}`
  return incrementId
  // incrementId = `${payload.year}${payload.code}${incrementId}`;

};