import * as React from 'react'
import useGlobalStore from './global-store'


const initialState = {
  counter: 0
}

const actions = {
  incCounter: (store: any, amount: number): void => {
    const counter = store.state.counter + amount
    store.setState({ counter })
  }
}

const useGlobal = useGlobalStore(React, initialState, actions) // eslint-disable-line

export default useGlobal
