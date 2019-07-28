import * as React from 'react'
import { Grid, Typ, Divider, Button } from 'react-project-ui'

// buttonConfig.set = { defaults: { size: null } }

function ExampleButtons(): React.ReactElement {
  return (
    <div>
      <Divider size="3">
        <Typ as="h3" u>Buttons</Typ>
      </Divider>

      <Typ as="h4">Sizes</Typ>
      <Grid padded>
        <Grid.Col auto>
          <Button >Default</Button>
        </Grid.Col>
        <Grid.Col auto>
          <Button size={ null }>No size</Button>
        </Grid.Col>
        <Grid.Col auto>
          <Button size="1">Size 1</Button>
        </Grid.Col>
        <Grid.Col auto>
          <Button size="2">Size 2</Button>
        </Grid.Col>
      </Grid>

      <Typ as="h4">Themes</Typ>
      <Grid padded>
        <Grid.Col auto>
          <Button size={ null }>Default</Button>
        </Grid.Col>
        <Grid.Col auto>
          <Button size={ null } theme="round">Round</Button>
        </Grid.Col>
      </Grid>

      <Grid padded>
        <Grid.Col auto>
          <Button>Default</Button>
        </Grid.Col>
        <Grid.Col auto>
          <Button theme="round">Round</Button>
        </Grid.Col>
      </Grid>

      <Grid padded>
        <Grid.Col auto>
          <Button size="2">Default</Button>
        </Grid.Col>
        <Grid.Col auto>
          <Button size="2" theme="round">Round</Button>
        </Grid.Col>
      </Grid>

      <Typ as="h4">Icons</Typ>
      <Grid padded>
        <Grid.Col auto>
          <Button size={ null } icon="cross">icon</Button>
        </Grid.Col>
        <Grid.Col auto>
          <Button size={ null } icon="cross" iconRight>icon right</Button>
        </Grid.Col>
        <Grid.Col auto>
          <Button size={ null } icon="cross" />
        </Grid.Col>
      </Grid>

      <Grid padded>
        <Grid.Col auto>
          <Button icon="cross">icon</Button>
        </Grid.Col>
        <Grid.Col auto>
          <Button icon="cross" iconRight>icon right</Button>
        </Grid.Col>
        <Grid.Col auto>
          <Button icon="cross" />
        </Grid.Col>
      </Grid>

      <Grid padded>
        <Grid.Col auto>
          <Button size="2" icon="cross">icon</Button>
        </Grid.Col>
        <Grid.Col auto>
          <Button size="2" icon="cross" iconRight>icon right</Button>
        </Grid.Col>
        <Grid.Col auto>
          <Button size="2" icon="cross" />
        </Grid.Col>
      </Grid>

      <Typ as="h4">Colors</Typ>
      <Grid padded>
        <Grid.Col auto>
          <Button>Default</Button>
        </Grid.Col>
        <Grid.Col auto>
          <Button color="grey">Color grey</Button>
        </Grid.Col>
        <Grid.Col auto>
          <Button color="green">Color green</Button>
        </Grid.Col>
        <Grid.Col auto>
          <Button color="red">Color red</Button>
        </Grid.Col>
        <Grid.Col auto>
          <Button color="blue">Color blue</Button>
        </Grid.Col>
      </Grid>

      <Typ as="h4">Colored icons</Typ>
      <Grid padded>
        <Grid.Col auto>
          <Button icon="cross">Default</Button>
        </Grid.Col>
        <Grid.Col auto>
          <Button icon="cross" color="grey">Color grey</Button>
        </Grid.Col>
        <Grid.Col auto>
          <Button icon="cross" color="green">Color green</Button>
        </Grid.Col>
        <Grid.Col auto>
          <Button icon="cross" color="red">Color red</Button>
        </Grid.Col>
        <Grid.Col auto>
          <Button icon="cross" color="blue">Color blue</Button>
        </Grid.Col>
      </Grid>
    </div>
  )
}

export default ExampleButtons
