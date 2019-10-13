import * as React from 'react'


const MODAL = {
  position: 'absolute',
  left: '0',
  right: '0',
  margin: '20px auto',
  padding: '20px',
  width: '500px',
  height: '600px',
  background: 'white',
  border: '1px solid black',
}

function Example({
  someText,
  open,
  close,
}: any): React.ReactElement {
  const _openSubmodal = React.useCallback(() => {
    open('submodal', { from: 'Example modal' })
  }, [])

  return (
    <div style={ MODAL as React.CSSProperties }>
      <h1>Modal</h1>

      <button onClick={ _openSubmodal }>open submodal</button>

      <p>{ someText }</p>

      <button onClick={ close }>close</button>
    </div>
  )
}

export default Example
