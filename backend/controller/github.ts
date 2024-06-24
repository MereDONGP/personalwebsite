import express from "express"
import { Octokit } from "octokit"


const github = express.Router()

github.get('/', async (req, res) => {
    const octokit = new Octokit({
        auth: process.env.githubAccount
      })
      
      const testing = await octokit.request('GET /user', {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
    res.send(testing)
})

export default github