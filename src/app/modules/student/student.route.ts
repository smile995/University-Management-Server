import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

// router.post('/create-student', StudentControllers.createStudent);
router.patch('/:studentId', StudentControllers.UpdateAStudent);
router.get('/', StudentControllers.getAllStudents);
router.get('/:studentId', StudentControllers.getSingleStudent);
router.delete('/:studentId', StudentControllers.deleteAStudent);
export const StudentRoutes = router;
