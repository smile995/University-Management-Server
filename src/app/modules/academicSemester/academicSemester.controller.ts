import { AcademicSemesterModel } from './academicSemester.model';
import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import { sendResponse } from '../../utils/sendResponse';
import { catchAsync } from '../../utils/catchAsync';
import { AcademicSemesterServices } from './academicSemester.service';




const createAcademicSemester = catchAsync(async (req, res) => {

    const result = await AcademicSemesterServices.createAcademicSemester(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Semester is retrieved successfully",
        data: result
    });
});

const getSingleAcademicSemester = catchAsync(async (req, res) => {
    const { id } = req.params
    const result = await AcademicSemesterServices.getSingleAcademicSemester(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Semester is retrieved successfully",
        data: result
    })
})

const getAllAcademicSemester = catchAsync(async (req, res) => {
    const { studentId } = req.params;
    const result = await AcademicSemesterServices.getAllAcademicSemester()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Semester are retrieved successfully",
        data: result
    })
})

export const AcademicSemesterControllers = {
    createAcademicSemester,
    getSingleAcademicSemester,
    getAllAcademicSemester
};
