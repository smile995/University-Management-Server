import { Request, Response } from "express"
import cors from "cors"

const express = require('express')
const app = express()
// perser
app.use(cors());
app.use(express.json())
// const route=app.router()
app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

export default app 