import * as React from 'react'
import { Divider, Typ } from 'react-project-ui'
import ExampleButtons from './example-buttons'
import ExampleCheckbox from './example-checkbox'
import ExampleGrid from './example-grid'
import ExampleInput from './example-input'
import ExampleList from './example-list'
import ExampleMenu from './example-menu'
import ExampleModal from './example-modal'
import ExampleSelect from './example-select'
import ExampleDropdown from './example-dropdown'
import ExamplePlayground from './example-playground'
import ExampleSprites from './example-sprites'
import { css } from '../../libs'


function ExamplesPage(): React.ReactElement {
  return (
    <div className={ css.center }>
      <Divider size="3">
        <Typ as="h2">Examples</Typ>
      </Divider>

      <ExampleList />
      <ExampleMenu />
      <ExampleDropdown />
      <ExampleModal />

      <ExamplePlayground />

      <ExampleSprites />
      <ExampleButtons />
      <ExampleCheckbox />
      <ExampleGrid />
      <ExampleInput />
      <ExampleSelect />
    </div>
  )
}

export default React.memo(ExamplesPage)
