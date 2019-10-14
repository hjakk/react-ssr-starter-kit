/**
 * copyright by andregardi https://github.com/andregardi/use-global-hook
 */

type State = { [key: string]: any }
type Actions = { [key: string]: Actions | fnAction }
type fnAction = (...args: any[]) => any
type CustomReturn = [State, Actions]

interface Listener {
  run(newState: Store['state']): void
  oldState: State
}

function setState(store: Store, newState?: State, callback?: () => any): void {
  store.state = { ...store.state, ...newState }
  store.listeners.forEach((listener) => listener.run(store.state))
  callback && callback()
}

interface Store {
  state: State
  setState?: typeof setState
  actions?: Actions
  listeners: Listener[]
}


function useCustom(
  store: Store,
  React: any,
  mapState?: (state: State) => any,
  mapActions?: (actions: Actions) => any
): CustomReturn {
  const [, originalHook] = React.useState(Object.create(null))
  const state = mapState ? mapState(store.state) : store.state
  const actions = React.useMemo(
    () => mapActions ? mapActions(store.actions as Actions) : store.actions,
    [mapActions, store.actions]
  )

  React.useEffect(() => {
    const newListener: Listener = {
      oldState: {},
      run: mapState ?
        (newState): void => {
          const mappedState = mapState(newState)
          if (mappedState !== newListener.oldState) {
            newListener.oldState = mappedState
            originalHook(mappedState)
          }
        } : originalHook
    }
    store.listeners.push(newListener)
    newListener.run(store.state)
    return (): void => {
      store.listeners = store.listeners.filter((listener) => listener !== newListener)
    }
  }, [])

  return [state, actions]
}

function associateActions(store: Store, actions: Actions): Actions {
  const associatedActions: Actions = {}
  Object.keys(actions).forEach((key) => {
    if (typeof actions[key] === 'function') {
      associatedActions[key] = (actions[key] as fnAction).bind(null, store)
    }
    else if (typeof actions[key] === 'object') {
      associatedActions[key] = associateActions(store, actions[key] as Actions)
    }
  })
  return associatedActions
}

const useStore = (React: any, initialState: State, actions: Actions, initializer?: (store: Store) => any): (() => CustomReturn) => {
  const store: Store = { state: initialState, listeners: [] }
  store.setState = setState.bind(null, store) as typeof setState
  store.actions = associateActions(store, actions)
  if (initializer) initializer(store)
  return useCustom.bind(null, store, React)
}

export default useStore
