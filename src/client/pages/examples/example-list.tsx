import * as React from 'react'
import { Typ, Grid, List, Svg, Container } from 'react-project-ui'


function ExampleList(): React.ReactElement {
  return (
    <Container panel size="2">
      <Container.Content cut>
        <Typ as="h3" u>Lists</Typ>

        <Typ as="h4">Default</Typ>
        <List>
          { [
            'Lorem ipsum',
            'dolor sit amet consectetur',
            'adipisicing elit',
            'Provident recusandae labore eveniet',
            'maxime inventore itaque',
            'temporibus eligendi',
          ]
            .map((item): React.ReactElement => {
              return (
                <List.Item key={ item }>
                  { item }
                </List.Item>
              )
            })
          }
        </List>
      </Container.Content>

      <Container.Content cut>
        <Typ as="h4">Menu 1, hover</Typ>
        <Grid>
          <Grid.Col size="4">
            <List menu="1" hover>
              { [
                'Lorem ipsum',
                'dolor sit amet consectetur',
                'adipisicing elit',
                'Provident recusandae labore eveniet recusandae labore eveniet labore eveniet',
                'maxime inventore itaque',
                'temporibus eligendi',
              ]
                .map((item, i): React.ReactElement => {
                  return (
                    <List.Item key={ item }>
                      <List.Col>
                        <Svg name="arrow-right" />
                      </List.Col>
                      <List.Col>
                        { item }
                      </List.Col>
                      <List.Col>
                        <Typ as="span" size="14" tag b>{ i }</Typ>
                      </List.Col>
                    </List.Item>
                  )
                })
              }
            </List>
          </Grid.Col>
        </Grid>
      </Container.Content>

      <Container.Content>
        <Typ textAlign="right" color="grey" size="14" i>Some slightly noticeable important text</Typ>
      </Container.Content>
    </Container>
  )
}

export default React.memo(ExampleList)
