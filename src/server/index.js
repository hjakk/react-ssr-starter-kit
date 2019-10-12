import express from 'express'
import chalk from 'chalk'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import middleware from './middleware'


const app = express()
const DIR = __dirname

app.disable('x-powered-by')
app.use(cookieParser())
app.use(compression())

app.use('/assets/', express.static(DIR))
app.use('/', middleware)

const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log('\n', `${ chalk.grey('[ssr]') }: Project is running at ${ chalk.blue(port) }`, '\n')
})
