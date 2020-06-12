import React, { useReducer, createContext } from 'react';

export default function<T extends unknown, S extends unknown>(reducer, actions, initialState) {
  const Context = createContext<T>({});

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer<S, typeof initialState>(reducer, initialState);

    const boundActions: Partial<{[key: string]: (val: any) => S}> = {};
    for(let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return <Context.Provider value={{ state, ...boundActions }}>
      {children}
    </Context.Provider>
  }

  return { Context, Provider };
}