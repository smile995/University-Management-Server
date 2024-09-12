import { TAcademicDepartment } from "./interface.academicDepartment";
import { AcademicDepartmentModel } from "./model.academicdepartment";

const createAcademicDepartment = async (payload: TAcademicDepartment) => {
    const result = (await AcademicDepartmentModel.create(payload));
    return result;

};

// get a specific student from DB  by unique ID
const getSingleAcademicDepartment = async (id: string) => {
    const result = await AcademicDepartmentModel.findOne({ _id: id })
        .populate('academicFaculty');
    return result;
};
const getAllAcademicDepartment = async () => {
    const result = await AcademicDepartmentModel.find().populate('academicFaculty')
    return result
}

const updateAcademicDepartment = async (id: string, projection: Object) => {
    const result = await AcademicDepartmentModel.findByIdAndUpdate(id, projection, { new: true })
    return result
}

export const AcademicDepartmentServices = {
    createAcademicDepartment,
    getSingleAcademicDepartment,
    getAllAcademicDepartment,
    updateAcademicDepartment

};
