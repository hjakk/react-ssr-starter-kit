import * as React from 'react'
import { Divider, Typ, Grid, Select } from 'react-project-ui'


const OPTIONS = [{ id: 1, text: 'Option 1' }, { id: 2, text: 'Option 2' }, { id: 3, text: 'Option 3' }, { id: 4, text: 'Option 4' }]

function ExampleSelect(): React.ReactElement {
  const [state, setState] = React.useState({
    value1: null,
    value2: null,
    value3: null,
    value4: null,
  })

  function _handleChange(e: any, { value, name }: any): void {
    setState({ ...state, [name]: value })
  }

  return (
    <div>
      <Divider size="3">
        <Typ as="h3" u>Select</Typ>
      </Divider>

      <Typ as="h4">Sizes</Typ>

      <Grid>
        <Grid.Col size="5">
          <Grid padded>
            <Grid.Col size="4">
              Default
            </Grid.Col>
            <Grid.Col size="6">
              <Select
                value={ state.value1 }
                name="value1"
                onChange={ _handleChange }
                list={ OPTIONS }
              />
            </Grid.Col>
          </Grid>

          <Grid padded>
            <Grid.Col size="4">
              No size
            </Grid.Col>
            <Grid.Col size="6">
              <Select
                value={ state.value2 }
                name="value2"
                onChange={ _handleChange }
                list={ OPTIONS }
                size={ null }
              />
            </Grid.Col>
          </Grid>

          <Grid padded>
            <Grid.Col size="4">
              Size 1
            </Grid.Col>
            <Grid.Col size="6">
              <Select
                value={ state.value3 }
                name="value3"
                onChange={ _handleChange }
                list={ OPTIONS }
                size="1"
              />
            </Grid.Col>
          </Grid>

          <Grid padded>
            <Grid.Col size="4">
              Size 2
            </Grid.Col>
            <Grid.Col size="6">
              <Select
                value={ state.value4 }
                name="value4"
                onChange={ _handleChange }
                list={ OPTIONS }
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

export default React.memo(ExampleSelect)
