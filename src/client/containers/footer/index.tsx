import * as React from 'react'
import { Grid } from '../../components'
import style from './style.css'


function Footer(): JSX.Element {
  return (
    <Grid className={ style.footer } item auto>
      footer
    </Grid>
  )
}

export default Footer
