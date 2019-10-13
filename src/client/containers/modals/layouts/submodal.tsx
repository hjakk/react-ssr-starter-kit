import * as React from 'react'


const MODAL = {
  position: 'absolute',
  left: '0',
  right: '0',
  margin: '20px auto',
  padding: '20px',
  width: '200px',
  height: '100px',
  background: 'white',
  border: '1px solid black',
}

function Submodal({ close }: any): React.ReactElement {
  return (
    <div style={ MODAL as React.CSSProperties }>
      <h2>Submodal</h2>

      <button onClick={ close }>close</button>
    </div>
  )
}

export default Submodal
