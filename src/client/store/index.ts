import * as React from 'react'
import useGlobalStore from './global-store'


const initialState = {
  counter: 0,
  modals: [],
}

const actions = {
  incCounter: (store: any, amount: number): void => {
    const counter = store.state.counter + amount
    store.setState({ counter })
  },
  toggleModal: (store, data) => {
    const modals = store.state.modals.slice()
    if (!modals.some((x) => x.name === data.name)) modals.push(data)
    store.setState({ modals })
  }
}

const useGlobal = useGlobalStore(React, initialState, actions) // eslint-disable-line

export default useGlobal
