import * as React from 'react'
import { Input } from '@project/ui'
import style from './style.styl'


function _Input(props: React.ComponentProps<typeof Input>): React.ReactElement<any> {
  return <Input classes={ style } { ...props } />
}

export default _Input
