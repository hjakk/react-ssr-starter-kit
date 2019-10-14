const counter = {
  count: 0
};

function createStore(initialState) {
  const store = { state: initialState, listeners: {} };
  console.log("create store:", store);
  return name => {
    const [, setState] = React.useState({});
    if (!store.listeners[name]) store.listeners[name] = [];
    store.listeners[name].push(setState);
    const dispatch = React.useCallback(action => {
      const newState = action(store.state[name]);
      store.state[name] = { ...store.state[name], ...newState };
      store.listeners[name].forEach(update => update(newState));
    }, []);
    return [store.state[name], dispatch];
  };
}

const useGlobal = createStore({ counter });
