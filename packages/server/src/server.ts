import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import path from 'path'
import router from './routes'
import mongoDB from './database/mongo'

mongoDB.connect()

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use('/static', express.static(path.resolve(__dirname, '/public')))
app.use(router)

app.listen(3333)

export default app
