import express from 'express'
import { jsonGraphqlExpress } from 'json-graphql-server'
import cors from 'cors'
import data from './data.json'

const PORT = 5000
const app = express()

app.use('/graphql', cors(), jsonGraphqlExpress(data))
app.listen(PORT, () => console.log(`data served in PORT ${PORT}`))
