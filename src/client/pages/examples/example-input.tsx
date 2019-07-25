import * as React from 'react'
import { Divider, Text, Grid, Input } from '@project/ui'


function ExampleInput(): React.ReactElement {
  const [state, setState] = React.useState({
    value1: '',
    value2: '',
  })

  return (
    <div>
      <Divider size="3">
        <Text as="h2" u>Input</Text>

        <Grid>
          <Grid.Col col="5">
            <Grid padded>
              <Grid.Col col="4" auto>
                First value:
              </Grid.Col>
              <Grid.Col col="6" auto>
                <Input
                  value={ state.value1 }
                  name="value1"
                  onChange={ console.log }
                />
              </Grid.Col>
            </Grid>
          </Grid.Col>

          <Grid.Col>
            <pre>{ JSON.stringify(state, null, 2) }</pre>
          </Grid.Col>
        </Grid>
      </Divider>
    </div>
  )
}

export default React.memo(ExampleInput)
