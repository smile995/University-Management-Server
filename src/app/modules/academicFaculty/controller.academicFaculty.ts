import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { AcademicfacultyServices } from "./services.academicFaculty";

const createAcademicFaculty = catchAsync(async (req, res) => {
    const result = await AcademicfacultyServices.createAcademicFaculty(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Faculty is created successfully",
        data: result
    });
});

const getSingleAcademicFaculty = catchAsync(async (req, res) => {
    const { id } = req.params
    const result = await AcademicfacultyServices.getSingleAcademicFaculty(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic faculty is retrieved successfully",
        data: result
    })
})

const getAllAcademicFaculties = catchAsync(async (req, res) => {
    const result = await AcademicfacultyServices.getAllAcademicFaculties()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic faculties are retrieved successfully",
        data: result
    })
})
const UpdateAcademicFaculty = catchAsync(async (req, res) => {
    const { updatedId } = req.params;
    const { name } = req.body
    const result = await AcademicfacultyServices.updateAcademicFaculty(updatedId,
        { name })
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic faculty is updated successfully",
        data: result
    })
})

export const AcademicFacultyControllers = {
    createAcademicFaculty,
    getSingleAcademicFaculty,
    getAllAcademicFaculties,
    UpdateAcademicFaculty
};
