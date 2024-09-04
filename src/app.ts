import { Request, Response } from "express"
import cors from "cors"
import { StudentRoutes } from "./app/modules/student/student.route";

const express = require('express')
const app = express()
// perser
app.use(cors());
app.use(express.json())

// application routers
app.use("/api/v1/students", StudentRoutes)


app.get('/', (req:Request, res:Response) => {
  res.send('Welcome to University Management')
})

export default app 