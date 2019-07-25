import * as React from 'react'
import { Divider, Text } from '@project/ui'
import ExampleButtons from './example-buttons'
import ExampleCheckbox from './example-checkbox'
import ExampleGrid from './example-grid'
import ExampleInput from './example-input'
import { css } from '../../libs'


function ExamplesPage(): React.ReactElement {
  return (
    <div className={ css.center }>
      <Divider size="3">
        <Text as="h1">Examples</Text>
      </Divider>

      <ExampleButtons />
      <ExampleCheckbox />
      <ExampleGrid />
      <ExampleInput />
    </div>
  )
}

export default React.memo(ExamplesPage)
