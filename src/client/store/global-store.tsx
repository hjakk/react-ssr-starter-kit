import React from 'react'


class Store {
  dispatch!: any

  constructor({ state, actions }) {
    this.state = state
    this._listeners = []
    Object.keys(actions).forEach((key) => {
      this[key] = (...args) => this.dispatch(actions[key](this.state, ...args))
    })
  }

  init = () => {
    const [, setState] = React.useState({})

    React.useEffect(() => {
      return () => {
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

const _counter = new Store({
  state: { count: 0 },
  actions: {
    inc: (state, amount) => ({ count: state.count + amount })
  }
})

// const _message = new Store({
//   state: { text: '' },
//   actions: {

//   }
// })




// type StoreEntry = { [key: string]: any }
// interface Store { [key: string]: StoreEntry }

// type Listener = (data: any) => void
// interface Listeners { [key: string]: Listener[] }

// type Dispatch = (action: Function) => void
// type UseStore = (stateName: string) => [StoreEntry, Dispatch]


// function createStore(initialData: Store): UseStore {
//   const store: Store = {}
//   const listeners: Listeners = {}

//   Object.keys(initialData).forEach((k): void => {
//     store[k] = initialData[k]
//     listeners[k] = []
//   })

//   return (name: string): ReturnType<UseStore> => {
//     const [, setState] = React.useState({})
//     const _lst = listeners[name]

//     if (!_lst.includes(setState)) _lst.push(setState)

//     React.useEffect(() => {
//       return (): void => { _lst.splice(_lst.indexOf(setState), 1) }
//     }, [])

//     const dispatch: Dispatch = React.useCallback((action) => {
//       const newState = action(store[name])
//       store[name] = { ...store[name], ...newState }
//       _lst.forEach((setState) => setState(newState))
//     }, [])

//     return [store[name], dispatch]
//   }
// }

// const counter = {
//   count: 0
// }

// const message = {
//   text: ''
// }

// const useStore = createStore({ counter, message })


function Test1(): React.ReactElement {
  // const [counter, dispatch] = useStore('counter')
  _counter.init()
  return (
    <div>
      <h1>Test 1</h1>
      <p>{ _counter.state.count }</p>
      <button onClick={ () => _counter.inc(1) }>inc</button>
      {
        /* <p>{ counter.count }</p>
      <button onClick={ () => dispatch(({ count }) => ({ count: count + 1 })) }>inc</button> */
      }
    </div>
  )
}

function Test2(): React.ReactElement {
  // const [counter, dispatch] = useStore('counter')
  _counter.init()
  return (
    <div>
      <h1>Test 2</h1>
      <p>{ _counter.state.count }</p>
      <button onClick={ () => _counter.inc(1) }>inc</button>
      {
        /* <p>{ counter.count }</p>
      <button onClick={ () => dispatch(({ count }) => ({ count: count + 1 })) }>inc</button> */
      }
    </div>
  )
}


function Message(): React.ReactElement {
  // const [data, dispatch] = useStore('message')
  return (
    <div>
      <h1>Test message</h1>
      {
        /* <p>{ data.text }</p>
      <input
        value={ data.text }
        onChange={ ({ target }) => dispatch(() => ({ text: target.value })) }
        type="text"
      /> */
      }
    </div>
  )
}

export { Test1, Test2, Message }
