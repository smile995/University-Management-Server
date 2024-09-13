import { NextFunction, Request, Response } from "express";

export const globalErrorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
    let statusCode = 400;
    let message =  "something went wrong";
    let errorSource=[
        {
            path:"",
            message:""
        }
    ]
    if(error.name=="ZodError"){
        const errorPth=error.issues[0].path
        message="Validation Error",
        errorSource=[{
            path:errorPth[errorPth.length-1],
            message:error.issues[0].message
        }]
    }
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
        errorSource,
        // error
    })
}