import httpStatus from "http-status";
import { sendResponse } from "../../utils/sendResponse";
import { AcademicDepartmentServices } from "./services.academicdepartment";
import { catchAsync } from "../../utils/catchAsync";
import { AcademicDepartmentModel } from "./model.academicdepartment";

const createAcademicDepartment = catchAsync(async (req, res) => {
    const result = await AcademicDepartmentServices.createAcademicDepartment(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Department is created successfully",
        data: result
    });
});

const getSingleAcademicDepartment = catchAsync(async (req, res) => {
    const { departmentId } = req.params
    const result = await AcademicDepartmentServices.getSingleAcademicDepartment(departmentId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Department is retrieved successfully",
        data: result
    })
})

const getAllAcademicDepartment = catchAsync(async (req, res) => {
    const result = await AcademicDepartmentServices.getAllAcademicDepartment()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Department are retrieved successfully",
        data: result
    })
})
const UpdateAcademicDepartment = catchAsync(async (req, res) => {
    const { departmentId } = req.params;
    const isValid = await AcademicDepartmentModel.findOne({ _id: departmentId })
    if (! isValid) {
        throw new Error("This Department is not exits in Database")
    }
    else {
        const { name, academicFaculty } = req.body
        const result = await AcademicDepartmentServices.updateAcademicDepartment(departmentId, {
            name, academicFaculty
        })
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "Academic Department is updated successfully",
            data: result
        })
    }
})

export const AcademicDepartmentControllers = {
    createAcademicDepartment,
    getSingleAcademicDepartment,
    getAllAcademicDepartment,
    UpdateAcademicDepartment
};
