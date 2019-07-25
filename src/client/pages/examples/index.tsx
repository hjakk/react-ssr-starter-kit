import * as React from 'react'
// import { Grid } from '@project/ui'
import ExampleButtons from './example-buttons'
import ExampleCheckbox from './example-checkbox'
import ExampleGrid from './example-grid'
import ExampleInput from './example-input'
import { css } from '../../libs'


function ExamplesPage(): React.ReactElement {
  return (
    <div className={ css.center }>
      <h1>Examples</h1>

      <ExampleButtons />
      <ExampleCheckbox />
      <ExampleGrid />
      <ExampleInput />
    </div>
  )
}

export default React.memo(ExamplesPage)
