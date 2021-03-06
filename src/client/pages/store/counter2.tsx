import * as React from 'react'
import { counter } from '../../store'
import style from './style.styl'


function Counter2(): React.ReactElement {
  counter.init()
  return (
    <div className={ style.block }>
      <h2>Counter 2</h2>
      <p>{ counter.state.count }</p>
      <button onClick={ (): void => counter.inc(5) }>inc +5</button>
    </div>
  )
}

export default Counter2
