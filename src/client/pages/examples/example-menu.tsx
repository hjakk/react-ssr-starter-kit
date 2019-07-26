import * as React from 'react'
import { Divider, Text, Grid } from 'react-project-ui'


function ExampleMenu(): React.ReactElement {
  return (
    <div>
      <Divider size="3">
        <Text as="h2" u>Menu</Text>
      </Divider>

      {/* <Text as="h3">Sizes</Text> */}

      <Grid padded>
      </Grid>
    </div>
  )
}

export default React.memo(ExampleMenu)
