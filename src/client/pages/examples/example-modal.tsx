import * as React from 'react'
import { Divider, Text, Grid } from 'react-project-ui'
import { withState } from '../../App'


function ExampleModal(props: any): React.ReactElement {
  console.log( props )
  return (
    <div>
      <Divider size="3">
        <Text as="h2" u>Modal</Text>
      </Divider>

      {/* <Text as="h3">Sizes</Text> */}

      <Grid padded>
      </Grid>
    </div>
  )
}

export default React.memo(withState(ExampleModal))
