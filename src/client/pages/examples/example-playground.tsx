import * as React from 'react'
import { Divider, Typ } from 'react-project-ui'


function ExamplePlayground(): React.ReactElement {
  return (
    <div>
      <Divider size="3">
        <Typ as="h3" u>Playground</Typ>
      </Divider>

      

    </div>
  )
}

export default React.memo(ExamplePlayground)
