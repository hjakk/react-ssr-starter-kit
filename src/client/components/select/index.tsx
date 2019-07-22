import * as React from 'react'
import { Select } from '@project/ui'
import style from './style.styl'


function _Select(props: React.ComponentProps<typeof Select>): React.ReactElement<any> {
  return <Select classes={ style } { ...props } />
}

export default _Select
