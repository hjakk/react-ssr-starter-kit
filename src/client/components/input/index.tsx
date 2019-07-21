import * as React from 'react'
import { Input } from 'react-ui'
import style from './style.styl'


function _Input(props: React.ComponentProps<typeof Input>): React.ReactElement<any> {
  return <Input classes={ style } { ...props } />
}

export default _Input
