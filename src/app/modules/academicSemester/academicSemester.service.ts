import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemesterModel } from "./academicSemester.model";




// get all the student from database
const createAcademicSemester = async (payload: TAcademicSemester) => {
    const name = payload.name
    const code = payload.code
    if (name == 'Autumn' && code == '01' || name == 'Summer' && code == '02' || name == 'Fall' && code == '03') {
        const result = await AcademicSemesterModel.create(payload);
        return result;
    }
    else {
        throw new Error("Semester and Code not matching to each other")

    }
};

// get a specific student from DB  by unique ID
const getSingleAcademicSemester = async (id: string) => {
    const result = await AcademicSemesterModel.findOne({_id:id});
    return result;
};

// delete a specific student
const getAllAcademicSemester = async () => {
    const result = await AcademicSemesterModel.find()
    return result
}

export const AcademicSemesterServices = {
    createAcademicSemester,
    getSingleAcademicSemester,
    getAllAcademicSemester

};
