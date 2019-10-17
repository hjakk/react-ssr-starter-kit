import * as React from 'react'
import { message } from '../../store'


function Message(): React.ReactElement {
  message.init()
  return (
    <div>
      <h2>Message</h2>
      <p>{ message.state.text || 'no text' }</p>
      <input value={ message.state.text } onChange={ message.onChange } />
    </div>
  )
}

export default Message
