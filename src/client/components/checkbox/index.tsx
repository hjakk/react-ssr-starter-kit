import * as React from 'react'
import { Checkbox } from '@project/ui'
import style from './style.styl'


function _Checkbox(props: React.ComponentProps<typeof Checkbox>): React.ReactElement<any> {
  return <Checkbox classes={ style } { ...props } />
}

export default _Checkbox
