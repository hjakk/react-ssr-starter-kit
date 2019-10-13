import * as React from 'react'
import fs from 'fs'
import path from 'path'
import cheerio from 'cheerio'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from '../client/app.tsx'


export default (req, res) => {
  const context = {}
  const html = renderToString(
    <StaticRouter location={ req.originalUrl }>
      <App />
    </StaticRouter>
  )

  const templatePath = path.join(__dirname, 'index.html')
  const template = cheerio.load(fs.readFileSync(templatePath).toString())

  template('#root').html(html)

  if (context.url) {
    res.redirect(301, context.url)
  }
  else {
    res.send(template.html())
  }
}
