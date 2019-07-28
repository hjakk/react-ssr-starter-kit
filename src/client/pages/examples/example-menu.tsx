import * as React from 'react'
import { Divider, Typ, Grid, Menu, Button } from 'react-project-ui'


function ExampleMenu(): React.ReactElement {
  const [value, setValue] = React.useState(2)
  return (
    <div>
      <Divider size="3">
        <Typ as="h3" u>Menu</Typ>
      </Divider>

      <Typ as="h4">Default</Typ>
      <Grid padded>
        <Grid.Col>
          <Menu>
            { [1, 2, 3].map((x): React.ReactElement => (
              <Menu.Item
                active={ x === value }
                onClick={ (): void => setValue(x) }
                key={ x }
              >
                Option { x }
              </Menu.Item>
            ))
            }
          </Menu>
        </Grid.Col>
      </Grid>

      <Typ as="h4">Tabs</Typ>
      <Grid padded>
        <Grid.Col>
          <Menu theme="tabs">
            { [1, 2, 3].map((x): React.ReactElement => (
              <Menu.Item
                active={ x === value }
                onClick={ (): void => setValue(x) }
                key={ x }
              >
                Option { x }
              </Menu.Item>
            ))
            }
          </Menu>
        </Grid.Col>
      </Grid>

      <Grid padded>
        <Grid.Col>
          <Menu size={ null } theme="tabs">
            { [1, 2, 3].map((x): React.ReactElement => (
              <Menu.Item
                active={ x === value }
                onClick={ (): void => setValue(x) }
                key={ x }
              >
                Option { x }
              </Menu.Item>
            ))
            }
          </Menu>
        </Grid.Col>
      </Grid>

      <Grid padded>
        <Grid.Col>
          <Menu size="1" theme="tabs">
            { [1, 2, 3].map((x): React.ReactElement => (
              <Menu.Item
                active={ x === value }
                onClick={ (): void => setValue(x) }
                key={ x }
              >
                Option { x }
              </Menu.Item>
            ))
            }
          </Menu>
        </Grid.Col>
      </Grid>

      <Grid padded>
        <Grid.Col>
          <Menu size="2" theme="tabs">
            { [1, 2, 3].map((x): React.ReactElement => (
              <Menu.Item
                active={ x === value }
                onClick={ (): void => setValue(x) }
                key={ x }
              >
                Option { x }
              </Menu.Item>
            ))
            }
          </Menu>
        </Grid.Col>
      </Grid>

      <Typ as="h4">Minimal</Typ>
      <Grid padded>
        <Grid.Col>
          <Menu theme="minimal">
            { [1, 2, 3].map((x): React.ReactElement => (
              <Menu.Item
                active={ x === value }
                onClick={ (): void => setValue(x) }
                key={ x }
              >
                Option { x }
              </Menu.Item>
            ))
            }
          </Menu>
        </Grid.Col>
      </Grid>

      <Grid padded>
        <Grid.Col>
          <Menu theme="minimal" size={ null }>
            { [1, 2, 3].map((x): React.ReactElement => (
              <Menu.Item
                active={ x === value }
                onClick={ (): void => setValue(x) }
                key={ x }
              >
                Option { x }
              </Menu.Item>
            ))
            }
          </Menu>
        </Grid.Col>
      </Grid>

      <Grid padded>
        <Grid.Col>
          <Menu theme="minimal" size="1">
            { [1, 2, 3].map((x): React.ReactElement => (
              <Menu.Item
                active={ x === value }
                onClick={ (): void => setValue(x) }
                key={ x }
              >
                Option { x }
              </Menu.Item>
            ))
            }
          </Menu>
        </Grid.Col>
      </Grid>

      <Grid padded>
        <Grid.Col>
          <Menu theme="minimal" size="2">
            { [1, 2, 3].map((x): React.ReactElement => (
              <Menu.Item
                active={ x === value }
                onClick={ (): void => setValue(x) }
                key={ x }
              >
                Option { x }
              </Menu.Item>
            ))
            }
          </Menu>
        </Grid.Col>
      </Grid>

      <Typ as="h4">Vertical</Typ>
      <Grid padded>
        <Grid.Col size="2">
          <Menu vertical>
            { [1, 2, 3].map((x): React.ReactElement => (
              <Menu.Item
                active={ x === value }
                onClick={ (): void => setValue(x) }
                key={ x }
              >
                Option { x }
              </Menu.Item>
            ))
            }
          </Menu>
        </Grid.Col>

        <Grid.Col size="2">
          <Menu size={ null } vertical>
            { [1, 2, 3].map((x): React.ReactElement => (
              <Menu.Item
                active={ x === value }
                onClick={ (): void => setValue(x) }
                key={ x }
              >
                Option { x }
              </Menu.Item>
            ))
            }
          </Menu>
        </Grid.Col>

        <Grid.Col size="2">
          <Menu size="1" vertical>
            { [1, 2, 3].map((x): React.ReactElement => (
              <Menu.Item
                active={ x === value }
                onClick={ (): void => setValue(x) }
                key={ x }
              >
                Option { x }
              </Menu.Item>
            ))
            }
          </Menu>
        </Grid.Col>

        <Grid.Col size="2">
          <Menu size="2" vertical>
            { [1, 2, 3].map((x): React.ReactElement => (
              <Menu.Item
                active={ x === value }
                onClick={ (): void => setValue(x) }
                key={ x }
              >
                Option { x }
              </Menu.Item>
            ))
            }
          </Menu>
        </Grid.Col>
      </Grid>

      <Grid padded>
        <Grid.Col ai="center" style={{ height: '30px' }}>
          <Typ as="span" fallback="no value">{ value }</Typ>
          { value && <Button onClick={ (): void => setValue(null) } theme="air" icon="cross" /> }
        </Grid.Col>
      </Grid>
    </div>
  )
}

export default React.memo(ExampleMenu)
