import * as React from 'react'
import { Divider, Text } from 'react-project-ui'
import ExampleButtons from './example-buttons'
import ExampleCheckbox from './example-checkbox'
import ExampleGrid from './example-grid'
import ExampleInput from './example-input'
import ExampleList from './example-list'
import ExampleMenu from './example-menu'
import ExampleModal from './example-modal'
import ExampleSelect from './example-select'
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
      <ExampleSelect />
      <ExampleList />
      <ExampleModal />
      <ExampleMenu />
    </div>
  )
}

export default React.memo(ExamplesPage)
