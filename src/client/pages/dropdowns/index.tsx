import * as React from 'react'
import { Select, List } from '../../components'
import { Grid, Col, Button, Checkbox, Input, Container, Dimmer, configDimmer } from '@project/ui'
import { css } from '../../libs'


function DropdownsPage(): JSX.Element {
  const [state, setState] = React.useState({
    value1: null,
    value2: '',
  })

  return (
    <div className={ css.center }>
      <Container>
        <h1>Dropdowns</h1>
      </Container>

      {/* <Dimmer />  */}

      <Grid padded>
        <Col>
          <Checkbox>checkbox 1</Checkbox>
        </Col>
      </Grid>

      <Grid padded>
        <Col auto>
          <Select
            value={ state.value1 }
            onChange={ (value: any): void => setState({ ...state, value1: value }) } // eslint-disable-line @typescript-eslint/no-explicit-any
            list={[
              { id: 1, text: 'first' },
              { id: 2, text: 'second' },
              { id: 3, text: 'third' },
              { id: 4, text: 'fourth' },
              { id: 5, text: 'fiveth' },
            ]}
            size="1"
          />
        </Col>

        <Col>
          { state.value1 && state.value1.text }
        </Col>
      </Grid>

      <Grid padded>
        <Col w320="14">
          <Input style={{ fontSize: '4em' }} />
        </Col>

        <Col w320="14">
          <Input style={{ fontSize: '2em' }} />
        </Col>

        <Col w320="14">
          <Input />
        </Col>

        <Col w320="14">
          <Input clearable={ false } />
        </Col>
      </Grid>

      <br/>

      <Grid padded>
        <Col auto ai="center">
          <label>Label text 1</label>
        </Col>
        <Col auto col="3">
          <Input />
        </Col>
        <Col>
          <Button>button</Button>
          <button>default</button>
          <input value="default input" type="text" readOnly />
        </Col>
      </Grid>

      <Grid padded>
        <Col auto ai="center">
          <label>Label text 2</label>
        </Col>
        <Col auto col="3">
          <Input size="1" />
        </Col>
        <Col>
          <Button size="1">button</Button>
        </Col>
      </Grid>

      <Grid padded>
        <Col auto ai="center">
          <label>Label text 3</label>
        </Col>
        <Col auto col="3">
          <Input
            value={ state.value2 }
            onChange={ (v: string): void => setState({ ...state, value2: v }) }
            size="2"
          />
        </Col>
        <Col auto>
          <Button size="2">button</Button>
        </Col>
        <Col>
          <p>{ state.value2 }</p>
        </Col>
      </Grid>

      <br/>

      <List>
        {
          [ 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'Sed harum culpa eveniet totam magni quae, doloremque deleniti voluptas quis at?',
            'Molestias officia repudiandae esse cupiditate quod sapiente ex animi nisi?'
          ].map((text): React.ReactElement => (
            <List.Item key={ text }>
              { text }
            </List.Item>
          ))
        }
      </List>
    </div>
  )
}

export default DropdownsPage
