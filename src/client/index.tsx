import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'normalize.css'
import './assets/styles/layout.pcss'
import './types/declarations'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'


function Client(): JSX.Element {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}


const root = document.getElementById('root')
if (process.env.SSR_DISABLED) {
  ReactDOM.render(<Client />, root)
}
else {
  ReactDOM.hydrate(<Client />, root)
}

if (module.hot) {
  module.hot.accept()
}
