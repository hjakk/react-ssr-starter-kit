import Store from './store'


export const modals = new Store({
  state: { list: [] },
  actions: {
    open: (name, params, state): any => {
      const list = state.list.slice()
      list.push({ name, ...params })
      return { list }
    },
    close: (index?: number, state?): any => {
      if (!state.list.length) return
      const list = state.list.slice()
      list.splice(index && index >= 0 ? index : state.list.length - 1)
      return { list }
    }
  }
})

export const notices = new Store({
  state: { list: [] },
  actions: {
    open: (type, params, state): any => {
      const list = state.list.slice()
      list.push({ type, ...params })
      return { list }
    }
  }
})

export const counter = new Store({
  state: { count: 0 },
  actions: {
    inc: (amount, state): any => ({ count: state.count + amount })
  }
})

export const message = new Store({
  state: { text: '' },
  actions: {
    onChange: ({ target }): any => ({ text: target.value })
  }
})
