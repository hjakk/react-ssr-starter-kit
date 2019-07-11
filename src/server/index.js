import express from 'express'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import middleware from './middleware'


const app = express()
const DIR = __dirname

app.disable('x-powered-by')
app.use(cookieParser())
app.use(compression())

app.use('^/$', middleware)
app.use(express.static(DIR))
app.use('*', middleware)

const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`Listening on port ${ port }`)
})
