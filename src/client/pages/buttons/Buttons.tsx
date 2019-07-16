import * as React from 'react'
import { Button, Grid } from '../../components'
import { css } from '../../libs'


function Buttons(): JSX.Element {
  return (
    <div className={ css.center }>
      <h1>Buttons</h1>

      <p>
        <b>Button sizes</b>:
      </p>

      <Grid row="2" padded>
        <Grid item auto>
          <Button>Button 1</Button>
        </Grid>
        <Grid item auto>
          <Button size="1">Button 2</Button>
        </Grid>
        <Grid item auto>
          <Button size="2">Button 3</Button>
        </Grid>
      </Grid>

      <p>
        <b>Button colors</b>:
      </p>

      <Button>Button 1</Button>
      <Button color="green">Button 1</Button>
      <Button color="red">Button 1</Button>
      <Button color="blue">Button 1</Button>

    </div>
  )
}

export default Buttons
