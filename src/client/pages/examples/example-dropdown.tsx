import * as React from 'react'
import { Divider, Typ, Button, Grid, Dropdown, List } from 'react-project-ui'


function Trigger({ setOpen }: { setOpen?: any }): React.ReactElement {
  return (
    <Button
      onClick={ (): void => setOpen(true) }
    >
      trigger
    </Button>
  )
}

function Menu(props): React.ReactElement {
  return (
    <List menu="1" hover style={{ minWidth: '200px' }}>
      { ['First option', 'Second option', 'Third option', 'Fourth option'].map((text): React.ReactElement => {
        return (
          <List.Item onClick={ (): void => {props.onChange(text);props.setOpen(false)} } key={ text }>
            <List.Col>
              { text }
            </List.Col>
          </List.Item>
        )
      })
      }
    </List>
  )
}

function ExampleDropdown(): React.ReactElement {
  const [value, setValue] = React.useState(null)
  return (
    <div>
      <Divider size="3">
        <Typ as="h3" u>Dropdowns</Typ>
      </Divider>

      <Typ as="h4">Custom dropdown with mouse handler</Typ>
      <Grid>
        <Grid.Col size="1">
          <Dropdown>
            <Trigger />
            <Dropdown.Content theme="menu-1">
              <Menu onChange={ setValue } />
            </Dropdown.Content>
          </Dropdown>
        </Grid.Col>

        <Grid.Col ai="center">
          <Typ as="span" fallback="Nothing selected">
            { value }
          </Typ>
          { value &&
            <>
              &nbsp;
              <Button theme="air" icon="cross" onClick={ (): void => setValue(null) } />
            </>
          }
        </Grid.Col>
      </Grid>
    </div>
  )
}

export default React.memo(ExampleDropdown)
