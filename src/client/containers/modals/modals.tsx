import * as React from 'react'
import { Dimmer } from 'react-project-ui'


const Context = React.createContext({})

interface Props {
  children: any
}

function Modals({ children }: Props) {
  const [modals, setModals] = React.useState([])

  function _close(): void {
    setModals([])
  }

  function _open(Element: React.ElementType): void {
    const list = modals.slice()
    list.push((): React.ReactElement => <Element toggleModal={ setModals } />)
    setModals(list)
  }

  return (
    <Context.Provider value={{ modals, setModals: _open }}>
      { children }

      { !!modals.length &&
        <Dimmer onClick={ _close }>
          { modals.map((Component, i): React.ReactElement => <Component key={ i } />) }
        </Dimmer>
      }
    </Context.Provider>
  )
}

export function withModal(Component: React.ElementType): React.SFC {
  return function Connected(props): React.ReactElement {
    return (
      <Context.Consumer>
        { ({ setModals }: { setModals: (ModalLayout: React.ElementType) => void }): React.ReactElement => <Component toggleModal={ setModals } { ...props } /> }
      </Context.Consumer>
    )
  }
}

export default React.memo(Modals)
