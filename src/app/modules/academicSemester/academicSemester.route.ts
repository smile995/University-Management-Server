import express from 'express';
import { ValidationSchema } from '../../middleweres/validationSchema';
import { AcademicSemesterControllers } from './academicSemester.controller';
import { CreateAcademicSemesterValidationSchema } from './academicSemester.validation';


const router = express.Router();

router.post('/create-academic-semester',
    ValidationSchema(CreateAcademicSemesterValidationSchema),
    AcademicSemesterControllers.createAcademicSemester
);
router.get('/:id',AcademicSemesterControllers.getSingleAcademicSemester);
router.get('/',AcademicSemesterControllers.getAllAcademicSemester);

// router.get('/:studentId', StudentControllers.getSingleStudent);
// router.delete('/:studentId', StudentControllers.deleteAStudent);

export const AcademicSemesterRoutes = router;
