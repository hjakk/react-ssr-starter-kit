import * as React from 'react'
import { Divider, Typ, Grid } from 'react-project-ui'
import style from './example-sprites.styl'


function ExampleSprites(): React.ReactElement {
  return (
    <div>
      <Divider size="3">
        <Typ as="h2" u>Sprites</Typ>
      </Divider>

      <Grid padded>
        <Grid.Col auto>
          <div className={ style.rus } />
        </Grid.Col>
        <Grid.Col auto>
          <div className={ style.eng } />
        </Grid.Col>
      </Grid>
    </div>
  )
}

export default React.memo(ExampleSprites)
