import * as React from 'react'
import { withModals } from '../../containers/modals'
import useGlobal from '../../store'


function AboutPage({ openModal }: any): React.ReactElement {
  const [state, setState] = useGlobal()

  const _openExampleModal = React.useCallback(() => {
    openModal('example', {
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
      </div>

      <div>
        <h2>Global state example</h2>
        <p>{ state.counter }</p>
        <button onClick={ () => setState.incCounter(1) }>inc</button>
      </div>
    </div>
  )
}

export default withModals(AboutPage)
