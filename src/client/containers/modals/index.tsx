import * as React from 'react'
import { withState } from '../../App'
import { Dimmer } from 'react-project-ui'


interface Props {
  modals: React.ReactElement[]
  setModals: (list?: React.ReactElement[]) => void
}

function Modals({ modals, setModals }: Props): React.ReactElement {
  if (!modals.length) return null

  function _close(): void {
    setModals([])
  }

  return (
    <Dimmer onClick={ _close }>
      { modals.map((Component, i): React.ReactElement => <Component  key={ i } />) }
    </Dimmer>
  )
}

export default withState(Modals)
