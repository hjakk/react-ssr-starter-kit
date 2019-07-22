import * as React from 'react'
import { Grid, Col } from '@project/ui'
import style from './style.styl'


function _Grid(props: React.ComponentProps<typeof Grid>): JSX.Element {
  return <Grid classes={ style } { ...props } />
}

function _Col(props: React.ComponentProps<typeof Col>): JSX.Element {
  return <Col classes={ style } { ...props } />
}

_Grid.Col = _Col

export default _Grid
