import * as React from 'react'
import { Grid, Text, Divider, Checkbox } from 'react-project-ui'


function ExampleCheckbox(): React.ReactElement {
  const [state, setState] = React.useState({
    value1: false,
    value2: false,
  })

  function _change(e, { value, name }): void {
    setState({ ...state, [name]: value })
  }

  return (
    <div>
      <Divider size="3">
        <Text as="h2" u>Checkboxes</Text>
      </Divider>

      <Text as="h3">Sizes</Text>

      <Grid padded>
        <Grid.Col col="4">
          <Grid padded>
            <Grid.Col auto>
              <Checkbox
                value={ state.value1 }
                name="value1"
                onChange={ _change }
              >
                Default size
              </Checkbox>
            </Grid.Col>

            <Grid.Col auto>
              <Checkbox
                value={ state.value2 }
                name="value2"
                onChange={ _change }
                size="1"
              >
                Size 1
              </Checkbox>
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

export default React.memo(ExampleCheckbox)
