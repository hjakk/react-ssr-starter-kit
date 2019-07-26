import * as React from 'react'
import { Grid, Text, Divider, Button } from 'react-project-ui'

// buttonConfig.set = { defaults: { size: null } }

function ExampleButtons(): React.ReactElement {
  return (
    <div>
      <Divider size="2">
        <Text as="h2" u>Buttons</Text>
      </Divider>

      <Text as="h3">Sizes</Text>
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

      <Text as="h3">Colors</Text>
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

      <Text as="h3">Themes</Text>
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

      <Text as="h3">Icons</Text>
      <Grid padded>
        <Grid.Col auto>
          <Button size={ null } icon="dude">icon</Button>
        </Grid.Col>
        <Grid.Col auto>
          <Button size={ null } icon="dude" iconRight>icon right</Button>
        </Grid.Col>
        <Grid.Col auto>
          <Button size={ null } icon="dude" />
        </Grid.Col>
      </Grid>

      <Grid padded>
        <Grid.Col auto>
          <Button icon="dude">icon</Button>
        </Grid.Col>
        <Grid.Col auto>
          <Button icon="dude" iconRight>icon right</Button>
        </Grid.Col>
        <Grid.Col auto>
          <Button icon="dude" />
        </Grid.Col>
      </Grid>

      <Grid padded>
        <Grid.Col auto>
          <Button size="2" icon="dude">icon</Button>
        </Grid.Col>
        <Grid.Col auto>
          <Button size="2" icon="dude" iconRight>icon right</Button>
        </Grid.Col>
        <Grid.Col auto>
          <Button size="2" icon="dude" />
        </Grid.Col>
      </Grid>
    </div>
  )
}

export default ExampleButtons
