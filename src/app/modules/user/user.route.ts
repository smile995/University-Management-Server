import express from 'express';
import { userController } from './user.controller';
import { ValidationSchema } from '../../middleweres/validationSchema';
import { studentValidationSchemas } from '../student/student.validation';

const router = express.Router();

router.post(
    '/create-student',
    // ValidationSchema(studentValidationSchemas.CreateStudentValidationSchema), 
    userController.createStudent);


export const UsersRoutes = router;
