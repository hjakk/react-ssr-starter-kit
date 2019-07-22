import * as React from 'react'
import { Select, Grid, Input, Button, List, Checkbox } from '../../components'
import { css } from '../../libs'


function DropdownsPage(): JSX.Element {
  const [state, setState] = React.useState({
    value1: null,
    value2: '',
  })

  return (
    <div className={ css.center }>
      <h1>Dropdowns</h1>

      <Grid padded>
        <Grid.Col>
          <Checkbox>checkbox 1</Checkbox>
        </Grid.Col>
      </Grid>

      <Grid padded>
        <Grid.Col auto>
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
        </Grid.Col>

        <Grid.Col>
          { state.value1 && state.value1.text }
        </Grid.Col>
      </Grid>

      <Grid padded>
        <Grid.Col w320="14">
          <Input style={{ fontSize: '4em' }} />
        </Grid.Col>

        <Grid.Col w320="14">
          <Input style={{ fontSize: '2em' }} />
        </Grid.Col>

        <Grid.Col w320="14">
          <Input />
        </Grid.Col>

        <Grid.Col w320="14">
          <Input clearable={ false } />
        </Grid.Col>
      </Grid>

      <br/>

      <Grid padded>
        <Grid.Col auto ai="center">
          <label>Label text 1</label>
        </Grid.Col>
        <Grid.Col auto col="3">
          <Input />
        </Grid.Col>
        <Grid.Col>
          <Button>button</Button>
          <button>default</button>
          <input value="default input" type="text" readOnly />
        </Grid.Col>
      </Grid>

      <Grid padded>
        <Grid.Col auto ai="center">
          <label>Label text 2</label>
        </Grid.Col>
        <Grid.Col auto col="3">
          <Input size="1" />
        </Grid.Col>
        <Grid.Col>
          <Button size="1">button</Button>
        </Grid.Col>
      </Grid>

      <Grid padded>
        <Grid.Col auto ai="center">
          <label>Label text 3</label>
        </Grid.Col>
        <Grid.Col auto col="3">
          <Input
            value={ state.value2 }
            onChange={ (v: string): void => setState({ ...state, value2: v }) }
            size="2"
          />
        </Grid.Col>
        <Grid.Col auto>
          <Button size="2">button</Button>
        </Grid.Col>
        <Grid.Col>
          <p>{ state.value2 }</p>
        </Grid.Col>
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
