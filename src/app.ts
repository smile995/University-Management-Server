import { NextFunction, Request, Response } from "express"
import cors from "cors"
import { StudentRoutes } from "./app/modules/student/student.route";
import { UsersRoutes } from "./app/modules/user/user.route";
import { globalErrorHandler } from "./app/middleweres/globalErrorHandler";
import { routeNotFound } from "./app/middleweres/route.notFound";
import {  router } from "./app/routes";

const express = require('express')
const app = express()
// perser
app.use(cors());
app.use(express.json())

// application routers
app.use('/api/v1',router)
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to University Management')
})

  
app.use(globalErrorHandler);
app.use(routeNotFound);

export default app 