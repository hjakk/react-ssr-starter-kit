import * as React from 'react'
import { Button } from 'react-ui'
import style from './style.styl'


function _Button(props: React.ComponentProps<typeof Button>): JSX.Element {
  return <Button classes={ style } color="grey" { ...props } />
}

export default _Button
