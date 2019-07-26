import * as React from 'react'
import { Grid } from 'react-project-ui'
import style from './style.styl'


function Footer(): JSX.Element {
  return (
    <Grid.Col className={ style.footer } auto>
      footer
    </Grid.Col>
  )
}

export default Footer
