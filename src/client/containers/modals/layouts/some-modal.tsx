import * as React from 'react'
import { Modal, Typ, Grid, Divider, Select, Dropdown, List, Svg } from 'react-project-ui'


function SomeModalLayout(props: any): React.ReactElement {
  const [value1, setValue1] = React.useState(null)
  const [value2, setValue2] = React.useState(null)
  
  return (
    <Modal>
      <Modal.Content>
        <h1>{ props.title }</h1>
      </Modal.Content>

      <Modal.Content>
        <>
          <Typ>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae nulla cumque ipsam porro placeat vitae natus, iure aspernatur nihil deleniti rem adipisci impedit animi rerum facilis laudantium asperiores! Alias, veniam.
          </Typ>

          <Divider>Test select</Divider>

          <Grid padded>
            <Grid.Col size="3">
              <Select
                value={ value1 }
                onChange={ (e, { value }): void => setValue1(value) }
                list={[{ id: 1, text: 'option 1' }, { id: 2, text: 'option 2' }]}
              />
            </Grid.Col>
            <Grid.Col ai="center">
              <Typ fallback="no value">{ value1 && value1.text }</Typ>
            </Grid.Col>
          </Grid>

          <Divider>Test dropdown</Divider>

          <Grid padded>
            <Grid.Col size="3">
              <Dropdown>
                <Dropdown.Trigger>
                  I&apos;m a dropdown
                  &nbsp;
                  <Svg name="arrow-down" />
                </Dropdown.Trigger>
                <Dropdown.Content theme="menu-1">
                  { ({ setOpen }): React.ReactElement => (
                    <List menu="1" hover>
                      { [1, 2, 3, 4, 5].map((i): React.ReactElement => (
                        <List.Item
                          onClick={ (): void => {setValue2(i);setOpen(false)} }
                          key={ i }
                        >
                          <List.Col>
                            item { i }
                          </List.Col>
                        </List.Item>
                      ))
                      }
                    </List>
                  )
                  }
                </Dropdown.Content>
              </Dropdown>
            </Grid.Col>

            <Grid.Col>
              <Typ fallback="no value">
                { value2 }
              </Typ>
            </Grid.Col>
          </Grid>
          
        </>
      </Modal.Content>
    </Modal>
  )
}

export default React.memo(SomeModalLayout)
