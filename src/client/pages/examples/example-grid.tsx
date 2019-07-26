import * as React from 'react'
import { Divider, Text, Grid } from 'react-project-ui'


const styleBlock = { padding: '10px', height: '50px', background: 'lightgrey', border: '1px solid grey' }

function ExampleGrid(): React.ReactElement {
  return (
    <div>
      <Divider size="3">
        <Text as="h2" u>Grid</Text>
      </Divider>

      <Text as="h3" u>Default</Text>
      <Grid>
        <Grid.Col><div style={ styleBlock } /></Grid.Col>
        <Grid.Col><div style={ styleBlock } /></Grid.Col>
        <Grid.Col><div style={ styleBlock } /></Grid.Col>
      </Grid>

      <Text as="h3" u>Padded</Text>
      <Grid padded>
        <Grid.Col><div style={ styleBlock } /></Grid.Col>
        <Grid.Col><div style={ styleBlock } /></Grid.Col>
        <Grid.Col><div style={ styleBlock } /></Grid.Col>
      </Grid>

      <Text as="h3" u>Auto size</Text>
      <Grid padded>
        <Grid.Col auto><div style={{ ...styleBlock, minWidth: '200px' }} /></Grid.Col>
        <Grid.Col auto><div style={{ ...styleBlock, minWidth: '200px' }} /></Grid.Col>
        <Grid.Col auto><div style={{ ...styleBlock, minWidth: '200px' }} /></Grid.Col>
      </Grid>

      <Text as="h3" u>Justify content: space-between</Text>
      <Grid padded jc="space-between">
        <Grid.Col auto><div style={{ ...styleBlock, minWidth: '200px' }} /></Grid.Col>
        <Grid.Col auto><div style={{ ...styleBlock, minWidth: '200px' }} /></Grid.Col>
        <Grid.Col auto><div style={{ ...styleBlock, minWidth: '200px' }} /></Grid.Col>
      </Grid>

      <Text as="h3" u>Justify content: center</Text>
      <Grid padded jc="center">
        <Grid.Col auto><div style={{ ...styleBlock, minWidth: '200px' }} /></Grid.Col>
        <Grid.Col auto><div style={{ ...styleBlock, minWidth: '200px' }} /></Grid.Col>
        <Grid.Col auto><div style={{ ...styleBlock, minWidth: '200px' }} /></Grid.Col>
      </Grid>

      <Text as="h3" u>Col width: from 1 to 14</Text>
      <Grid padded>
        <Grid.Col col="1"><div style={ styleBlock }>col 1</div></Grid.Col>
        <Grid.Col col="2"><div style={ styleBlock }>col 2</div></Grid.Col>
        <Grid.Col col="3"><div style={ styleBlock }>col 3</div></Grid.Col>
        <Grid.Col col="4"><div style={ styleBlock }>col 4</div></Grid.Col>
        <Grid.Col col="5"><div style={ styleBlock }>col 5</div></Grid.Col>
        <Grid.Col col="6"><div style={ styleBlock }>col 6</div></Grid.Col>
        <Grid.Col col="7"><div style={ styleBlock }>col 7</div></Grid.Col>
        <Grid.Col col="8"><div style={ styleBlock }>col 8</div></Grid.Col>
        <Grid.Col col="9"><div style={ styleBlock }>col 9</div></Grid.Col>
        <Grid.Col col="10"><div style={ styleBlock }>col 10</div></Grid.Col>
        <Grid.Col col="11"><div style={ styleBlock }>col 11</div></Grid.Col>
        <Grid.Col col="12"><div style={ styleBlock }>col 12</div></Grid.Col>
        <Grid.Col col="13"><div style={ styleBlock }>col 13</div></Grid.Col>
        <Grid.Col col="14"><div style={ styleBlock }>col 14</div></Grid.Col>
      </Grid>

      <Text as="h3" u>Media queries</Text>
      <Grid padded>
        <Grid.Col w1200="7"><div style={ styleBlock }>w1200</div></Grid.Col>
      </Grid>
      <Grid padded>
        <Grid.Col w1120="7"><div style={ styleBlock }>w1120</div></Grid.Col>
      </Grid>
      <Grid padded>
        <Grid.Col w960="7"><div style={ styleBlock }>w960</div></Grid.Col>
      </Grid>
      <Grid padded>
        <Grid.Col w800="7"><div style={ styleBlock }>w800</div></Grid.Col>
      </Grid>
      <Grid padded>
        <Grid.Col w640="7"><div style={ styleBlock }>w640</div></Grid.Col>
      </Grid>
      <Grid padded>
        <Grid.Col w480="7"><div style={ styleBlock }>w480</div></Grid.Col>
      </Grid>
      <Grid padded>
        <Grid.Col w320="7"><div style={ styleBlock }>w320</div></Grid.Col>
      </Grid>
      <Grid padded>
        <Grid.Col hide="960"><div style={ styleBlock }>hide on w960</div></Grid.Col>
      </Grid>
    </div>
  )
}

export default React.memo(ExampleGrid)
