import { NextFunction, Request, Response } from "express"
import cors from "cors"
import { StudentRoutes } from "./app/modules/student/student.route";
import { UsersRoutes } from "./app/modules/user/user.route";
import { globalErrorHandler } from "./app/middleweres/globalErrorHandler";

const express = require('express')
const app = express()
// perser
app.use(cors());
app.use(express.json())

// application routers
app.use("/api/v1/students", StudentRoutes) //student root route
app.use("/api/v1/users", UsersRoutes) //student root route


app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to University Management')
})

  
app.use(globalErrorHandler)

export default app 