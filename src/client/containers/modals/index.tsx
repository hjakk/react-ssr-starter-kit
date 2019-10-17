import * as React from 'react'
import { modals } from '../../store'
import * as layouts from './layouts'
import { _join } from '../../utils'
import style from './style.styl'


function Modals(): React.ReactElement | null {
  modals.init()

  const overlay = React.createRef<HTMLDivElement>()
  const _open = React.useCallback(modals.open, [modals.state.list])
  const _close = React.useCallback((i) => modals.close(i), [])
  const _onOverlayClick = React.useCallback((e) => {
    if (e.target === overlay.current) modals.close(null)
  }, [overlay])

  return !!modals.state.list.length && modals.state.list.map((modal: any, i: number): React.ReactElement | null => {
    const Component = (layouts as { [key: string]: ((props: any) => React.ReactElement) })[modal.name]
    return Component ? (
      <div
        className={ _join(style.dimmer, !i && style.color) }
        onClick={ _onOverlayClick }
        ref={ overlay }
        key={ i }
      >
        <Component
          { ...modal }
          open={ _open }
          close={ _close }
        />
      </div>
    ) : null
  })
}

export default Modals
