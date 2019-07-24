import * as React from 'react'
import { Button, Grid } from '@project/ui'
import { css } from '../../libs'


function Buttons(): JSX.Element {
  return (
    <div className={ css.center }>
      <h1>Buttons</h1>

      <p>
        <b>Button sizes</b>:
      </p>

      <Grid padded>
        <Grid.Col auto>
          <Button>Button 1</Button>
        </Grid.Col>
        <Grid.Col auto>
          <Button size="1">Button 2</Button>
        </Grid.Col>
        <Grid.Col auto>
          <Button size="2">Button 3</Button>
        </Grid.Col>
      </Grid>

      <p>
        <b>Button colors</b>:
      </p>

      <Button>Button 1</Button>
      <Button color="grey">Button 1</Button>
      <Button color="green">Button 1</Button>
      <Button color="red">Button 1</Button>
      <Button color="blue">Button 1</Button>

    </div>
  )
}

export default Buttons
