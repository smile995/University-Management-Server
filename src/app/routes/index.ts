import { Router } from "express";
import { StudentRoutes } from "../modules/student/student.route";
import { UsersRoutes } from "../modules/user/user.route";
import { AcademicSemesterRoutes } from "../modules/academicSemester/academicSemester.route";

export const router=Router();
const modulesRoute=[
    {
        path:"/students",
        route:StudentRoutes
    },
    {
        path:"/users",
        route:UsersRoutes
    },
    {
        path:"/academic-semesters",
        route:AcademicSemesterRoutes
    },
];

modulesRoute.forEach(route=>router.use(route.path,route.route))


