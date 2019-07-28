import * as React from 'react'
import Header from './containers/header'
import Footer from './containers/footer'
import { Modals } from './containers/modals'
import Routes from './routes'


function App(): React.ReactElement {
  return (
    <Modals>
      <Header />
      <Routes />
      <Footer />
    </Modals>
  )
}

export default App
