import * as React from 'react'
import useStore from '../../store'
import * as layouts from './layouts'
import { _join } from '../../utils'
import style from './style.styl'


function Modals(): React.ReactElement {
  const [{ modals }, { toggleModal }] = useStore()
  console.log( '>>>', modals )
  return (
    <div>
      <button onClick={ () => toggleModal({ name: 'example' }) }>toggle modal</button>
    </div>
  )
}

export default Modals

// interface ContextProps {
//   openModal(name: string, params: { [key: string]: any }): void
//   closeModal(): void
// }

// interface ModalParams { name: string, [key: string]: any }

// const ModalsContext = React.createContext<Partial<ContextProps>>({})

// function Modals({ children }: React.HTMLAttributes<HTMLDivElement>): React.ReactElement | null {
//   const [list, setList] = React.useState<ModalParams[]>([])

//   const overlay = React.createRef<HTMLDivElement>()

//   const _open = React.useCallback((name, params) => {
//     const arr = list.slice()
//     arr.push({ name, ...params })
//     setList(arr)
//   }, [list])

//   const _close = React.useCallback((i = list.length - 1) => (): void => {
//     const arr = list.slice()
//     arr.splice(i, 1)
//     setList(arr)
//   }, [list])

//   const _onOverlayClick = React.useCallback((e) => {
//     if (e.target === overlay.current) _close()()
//   }, [overlay, _close])

//   return (
//     <ModalsContext.Provider value={{ openModal: _open, closeModal: _close }}>
//       { children }

//       { !!list.length && list.map((modal, i): React.ReactElement | null => {
//         const Component = (layouts as { [key: string]: ((props: any) => React.ReactElement) })[modal.name]
//         return Component ? (
//           <div
//             className={ _join(style.dimmer, !i && style.color) }
//             onClick={ _onOverlayClick }
//             ref={ overlay }
//             key={ i }
//           >
//             <Component
//               { ...modal }
//               open={ _open }
//               close={ _close(i) }
//             />
//           </div>
//         ) : null
//       })
//       }
//     </ModalsContext.Provider>
//   )
// }

// export function withModals(Component: React.ElementType): React.FunctionComponent {
//   return (props): React.ReactElement => {
//     const context = React.useContext(ModalsContext)
//     return <Component openModal={ context.openModal } closeModal={ context.closeModal } { ...props } />
//   }
// }

// export default Modals
