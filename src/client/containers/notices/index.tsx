import * as React from 'react'
import { notices } from '../../store'


type NoticeProps = { [key: string]: any }

function Notices(): React.ReactElement | null {
  notices.init()
  if (!notices.state.list.length) return null
  return (
    <div>
      { notices.state.list.map((notice: NoticeProps, i: number) => (
        <div key={ i }>
          { notice.type }
        </div>
      ))
      }
    </div>
  )
}

export default Notices
