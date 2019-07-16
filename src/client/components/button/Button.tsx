import * as React from 'react'
import { Button } from 'react-ui'
import style from './style.css'


export default function _Button(props: React.ComponentProps<typeof Button>): JSX.Element {
  return <Button classList={ style } color="grey" { ...props } />
}
