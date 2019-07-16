import * as React from 'react'
import { Grid } from 'react-ui'
import style from './style.styl'


export default function _Button(props: React.ComponentProps<typeof Grid>): JSX.Element {
  return <Grid classList={ style } { ...props } />
}
