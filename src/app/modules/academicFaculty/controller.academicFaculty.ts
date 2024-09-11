import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { AcademicFacultyServices} from "./services.academicFaculty";

const createAcademicFaculty = catchAsync(async (req, res) => {
    const result = await AcademicFacultyServices.createAcademicFaculty(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Faculty is created successfully",
        data: result
    });
});

const getSingleAcademicFaculty = catchAsync(async (req, res) => {
    const { facultyId } = req.params
    const result = await AcademicFacultyServices.getSingleAcademicFaculty(facultyId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic faculty is retrieved successfully",
        data: result
    })
})

const getAllAcademicFaculties = catchAsync(async (req, res) => {
    const result = await AcademicFacultyServices.getAllAcademicFaculty()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic faculties are retrieved successfully",
        data: result
    })
})
const UpdateAcademicFaculty = catchAsync(async (req, res) => {
    const { facultyId } = req.params;
    const { name } = req.body
    const result = await AcademicFacultyServices.updateAcademicFaculty(facultyId,
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
