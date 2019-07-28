import * as React from 'react'
import { Divider, Typ, Grid } from 'react-project-ui'


const styleBlock = { padding: '10px', height: '50px', background: 'lightgrey', border: '1px solid grey' }

function ExampleGrid(): React.ReactElement {
  return (
    <div>
      <Divider size="3">
        <Typ as="h3" u>Grid</Typ>
      </Divider>

      <Typ as="h4" u>Default</Typ>
      <Grid>
        <Grid.Col><div style={ styleBlock } /></Grid.Col>
        <Grid.Col><div style={ styleBlock } /></Grid.Col>
        <Grid.Col><div style={ styleBlock } /></Grid.Col>
      </Grid>

      <Typ as="h4" u>Padded</Typ>
      <Grid padded>
        <Grid.Col><div style={ styleBlock } /></Grid.Col>
        <Grid.Col><div style={ styleBlock } /></Grid.Col>
        <Grid.Col><div style={ styleBlock } /></Grid.Col>
      </Grid>

      <Typ as="h4" u>Auto size</Typ>
      <Grid padded>
        <Grid.Col auto><div style={{ ...styleBlock, minWidth: '200px' }} /></Grid.Col>
        <Grid.Col auto><div style={{ ...styleBlock, minWidth: '200px' }} /></Grid.Col>
        <Grid.Col auto><div style={{ ...styleBlock, minWidth: '200px' }} /></Grid.Col>
      </Grid>

      <Typ as="h4" u>Justify content: space-between</Typ>
      <Grid padded jc="space-between">
        <Grid.Col auto><div style={{ ...styleBlock, minWidth: '200px' }} /></Grid.Col>
        <Grid.Col auto><div style={{ ...styleBlock, minWidth: '200px' }} /></Grid.Col>
        <Grid.Col auto><div style={{ ...styleBlock, minWidth: '200px' }} /></Grid.Col>
      </Grid>

      <Typ as="h4" u>Justify content: center</Typ>
      <Grid padded jc="center">
        <Grid.Col auto><div style={{ ...styleBlock, minWidth: '200px' }} /></Grid.Col>
        <Grid.Col auto><div style={{ ...styleBlock, minWidth: '200px' }} /></Grid.Col>
        <Grid.Col auto><div style={{ ...styleBlock, minWidth: '200px' }} /></Grid.Col>
      </Grid>

      <Typ as="h4" u>Col width: from 1 to 14</Typ>
      <Grid padded>
        <Grid.Col size="1"><div style={ styleBlock }>col 1</div></Grid.Col>
        <Grid.Col size="2"><div style={ styleBlock }>col 2</div></Grid.Col>
        <Grid.Col size="3"><div style={ styleBlock }>col 3</div></Grid.Col>
        <Grid.Col size="4"><div style={ styleBlock }>col 4</div></Grid.Col>
        <Grid.Col size="5"><div style={ styleBlock }>col 5</div></Grid.Col>
        <Grid.Col size="6"><div style={ styleBlock }>col 6</div></Grid.Col>
        <Grid.Col size="7"><div style={ styleBlock }>col 7</div></Grid.Col>
        <Grid.Col size="8"><div style={ styleBlock }>col 8</div></Grid.Col>
        <Grid.Col size="9"><div style={ styleBlock }>col 9</div></Grid.Col>
        <Grid.Col size="10"><div style={ styleBlock }>col 10</div></Grid.Col>
        <Grid.Col size="11"><div style={ styleBlock }>col 11</div></Grid.Col>
        <Grid.Col size="12"><div style={ styleBlock }>col 12</div></Grid.Col>
        <Grid.Col size="13"><div style={ styleBlock }>col 13</div></Grid.Col>
        <Grid.Col size="14"><div style={ styleBlock }>col 14</div></Grid.Col>
      </Grid>

      <Typ as="h4" u>Media queries</Typ>
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
