import { TAcademicFaculty } from "./interface.academicFaculty";
import AcademicFacultyModel from "./model.academicFaculty";


const createAcademicFaculty = async (payload: TAcademicFaculty) => {
    const result = await AcademicFacultyModel.create(payload);
    return result;
};

// get a specific student from DB  by unique ID
const getSingleAcademicFaculty = async (id: string) => {
    const result = await AcademicFacultyModel.findOne({ _id: id });
    return result;
};
const getAllAcademicFaculty = async () => {
    const result = await AcademicFacultyModel.find()
    return result
}

const updateAcademicFaculty = async (id: string, projection: Object) => {
    const result = await AcademicFacultyModel.findByIdAndUpdate({ _id: id }, projection, { new: true })
    return result
}

export const AcademicFacultyServices = {
    createAcademicFaculty,
    getSingleAcademicFaculty,
    getAllAcademicFaculty,
    updateAcademicFaculty

};
