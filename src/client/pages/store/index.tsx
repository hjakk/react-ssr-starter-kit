import * as React from 'react'
import Counter1 from './counter1'
import Counter2 from './counter2'
import Message from './message'
import style from './style.styl'


function StorePage(): React.ReactElement {
  return (
    <div className={ style.main }>
      <h1>Store example</h1>

      <Counter1 />
      <Counter2 />

      <Message />
    </div>
  )
}

export default StorePage
