import * as React from 'react'
import { modals, notices } from '../../store'


function AboutPage(): React.ReactElement {
  const _openExampleModal = React.useCallback(() => {
    modals.open('example', {
      someText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur vitae autem porro in ratione, dolor sapiente sequi est facere id debitis voluptates quia quidem illo! Architecto, eveniet. Et, voluptas exercitationem!'
    })
  }, [])

  return (
    <div style={{ margin: '0 auto', maxWidth: '1000px' }}>
      <h1>React SSR Starter Kit</h1>

      <h2>Features:</h2>

      <pre>
        <ul>
          <li>Webpack 4</li>
          <li>Babel 7</li>
          <li>React</li>
          <li>React-router</li>
          <li>TypeScript</li>
          <li>ESlint</li>
          <li>Stylus</li>
          <li>CSS Modules</li>
          <li>PostCSS</li>
          <li>Express</li>
        </ul>
      </pre>

      <h2>Usage</h2>

      <pre>
        npm start          # build development and start node server with SSR
        <br />
        npm run dev        # start webpack-dev-server
        <br />
        npm run build:dev  # build development
        <br />
        npm run build      # build production
      </pre>

      <div>
        <h2>Modals example</h2>
        <button onClick={ _openExampleModal }>Modal example</button>
        <button onClick={ (): void => notices.open('error', {}) }>Notice example</button>
      </div>
    </div>
  )
}

export default AboutPage
