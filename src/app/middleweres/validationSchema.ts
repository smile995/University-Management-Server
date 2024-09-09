import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

export const ValidationSchema = (validationSchema: AnyZodObject) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await validationSchema.parseAsync({
                body: req.body
            })
            return next();
        } catch (error) {
            next(error)
        }

    }
}