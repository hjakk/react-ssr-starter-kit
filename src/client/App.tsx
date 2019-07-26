import * as React from 'react'
import Header from './containers/header/Header'
import Footer from './containers/footer'
import Modals from './containers/modals'
import Routes from './Routes'


const Context = React.createContext({})

function withState(Component: React.SFC): React.SFC {
  return function Connected(props): React.ReactElement {
    return (
      <Context.Consumer>
        { (data): React.ReactElement => <Component { ...data } { ...props } /> }
      </Context.Consumer>
    )
  }
}

function App(): React.ReactElement {
  const [modals, setModals] = React.useState([])

  return (
    <Context.Provider value={{ modals, setModals }}>
      <Header />
      <Routes />
      <Modals />
      <Footer />
    </Context.Provider>
  )
}

export { withState }
export default App
