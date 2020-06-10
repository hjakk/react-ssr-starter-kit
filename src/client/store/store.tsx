import React from 'react'


type AnyFunction = (...args: any[]) => any
type StateType = { [key: string]: any }
type ActionsType = { [key: string]: AnyFunction }

interface StoreParams {
  state: StateType
  actions: ActionsType
}

class Store {
  dispatch!: (action: AnyFunction) => void
  state: StateType
  _listeners: (React.Dispatch<React.SetStateAction<StateType>>)[]
  [key: string]: any

  constructor({ state, actions }: StoreParams) {
    this.state = state
    this._listeners = []
    Object.keys(actions).forEach((key) => {
      this[key] = (...args: any[]): void => this.dispatch(actions[key](...args, this.state))
    })
  }

  init = (): void => {
    const [, setState] = React.useState({}) // eslint-disable-line react-hooks/rules-of-hooks
    React.useEffect(() => { // eslint-disable-line react-hooks/rules-of-hooks
      return (): void => {
        const i = this._listeners.indexOf(setState)
        if (i > -1) this._listeners.splice(i, 1)
      }
    }, [])

    if (!this._listeners.includes(setState)) {
      this._listeners.push(setState)
      this.dispatch = (newState): void => {
        if (!newState || newState === this.state) return
        this.state = { ...this.state, ...newState }
        this._listeners.forEach((setState) => setState(this.state))
      }
    }
  }
}

export default Store
