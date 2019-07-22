import * as React from 'react'
import { List, ListItem } from '@project/ui'
import style from './style.styl'


function _List(props: React.ComponentProps<typeof List>): JSX.Element {
  return <List classes={ style } { ...props } />
}

function _ListItem(props: React.ComponentProps<typeof ListItem>): JSX.Element {
  return <ListItem classes={ style } { ...props } />
}

_List.Item = _ListItem

export default _List
