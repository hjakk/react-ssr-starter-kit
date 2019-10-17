import * as React from 'react'
import { counter } from '../../store'
import style from './style.styl'


function Counter1(): React.ReactElement {
  counter.init()
  return (
    <div className={ style.block }>
      <h2>Counter 1</h2>
      <p>{ counter.state.count }</p>
      <button onClick={ (): void => counter.inc(1) }>inc +1</button>
    </div>
  )
}

export default Counter1
