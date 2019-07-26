import * as React from 'react'
import { Divider, Text, Grid, Input } from 'react-project-ui'


function ExampleInput(): React.ReactElement {
  const [state, setState] = React.useState({
    value1: '',
    value2: '',
    value3: '',
    value4: '',
  })

  function _handleChange(e: any, { value, name }: any): void {
    setState({ ...state, [name]: value })
  }

  return (
    <div>
      <Divider size="3">
        <Text as="h2" u>Inputs</Text>
      </Divider>

      <Grid>
        <Grid.Col col="5">
          <Grid padded>
            <Grid.Col col="4" auto>
              Default size:
            </Grid.Col>
            <Grid.Col col="6" auto>
              <Input
                value={ state.value1 }
                name="value1"
                onChange={ _handleChange }
              />
            </Grid.Col>
          </Grid>

          <Grid padded>
            <Grid.Col col="4" auto>
              No size:
            </Grid.Col>
            <Grid.Col col="6" auto>
              <Input
                value={ state.value2 }
                name="value2"
                onChange={ _handleChange }
                size={ null }
              />
            </Grid.Col>
          </Grid>

          <Grid padded>
            <Grid.Col col="4" auto>
              Size 1:
            </Grid.Col>
            <Grid.Col col="6" auto>
              <Input
                value={ state.value3 }
                name="value3"
                onChange={ _handleChange }
                size="1"
              />
            </Grid.Col>
          </Grid>

          <Grid padded>
            <Grid.Col col="4" auto>
              Size 2:
            </Grid.Col>
            <Grid.Col col="6" auto>
              <Input
                value={ state.value4 }
                name="value4"
                onChange={ _handleChange }
                size="2"
              />
            </Grid.Col>
          </Grid>
        </Grid.Col>

        <Grid.Col>
          <pre>{ JSON.stringify(state, null, 2) }</pre>
        </Grid.Col>
      </Grid>
    </div>
  )
}

export default React.memo(ExampleInput)
