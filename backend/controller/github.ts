import express, { type Request, type Response } from "express"

const github = express.Router()

github.get('/', (req : Request, res: Response) => {
    res.send("we have hit the end point")
})

export default github