
import express from 'express';
import { ValidationSchema } from '../../middleweres/validationSchema';
import { AcademicFacultyControllers } from './controller.academicFaculty';
import { AcademicDFacultyValidationSchema } from './validation.academicFaculty';


const router = express.Router();

router.post('/create-academic-faculty',
    ValidationSchema(AcademicDFacultyValidationSchema),
    AcademicFacultyControllers.createAcademicFaculty
);
router.patch('/:facultyId', ValidationSchema(AcademicDFacultyValidationSchema), AcademicFacultyControllers.UpdateAcademicFaculty);
router.get('/:facultyId', AcademicFacultyControllers.getSingleAcademicFaculty);
router.get('/', AcademicFacultyControllers.getAllAcademicFaculties);


export const AcademicFacultyRoutes = router;
