import { Router } from "express";
import { ValidationSchema } from "../../middleweres/validationSchema";
import { CreateAcademicDepartmentValidationSchema } from "./validation.academicDepartment";
import { AcademicDepartmentServices } from "./services.academicdepartment";
import { AcademicDepartmentControllers } from "./controller.academicDepartment";

const router = Router();

router.post('/create-academic-department',
    ValidationSchema(CreateAcademicDepartmentValidationSchema),
    AcademicDepartmentControllers.createAcademicDepartment
   
);
router.patch('/:departmentId',AcademicDepartmentControllers.UpdateAcademicDepartment);
router.get('/:departmentId',AcademicDepartmentControllers.getSingleAcademicDepartment);
router.get('/',AcademicDepartmentControllers.getAllAcademicDepartment);


export const AcademicDepartmentRouter = router;
