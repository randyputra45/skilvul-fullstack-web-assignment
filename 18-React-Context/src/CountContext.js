import React from 'react';
import { createContext, useContext, useReducer } from 'react';

const CountContext = createContext();
let initialValue = {counter: 0};

const countReducer = (state, action) => {
  switch (action.type) {
    case 'increment': {
      // code here
      return {
        counter: state.counter+1
      }
    }
    case 'decrement': {
      // code here
      if(state.counter === 0){
        return {
          counter: state.counter
        }
      }
      else{
        return {
          counter: state.counter-1
        }
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const CountProvider = ({ children }) => {
  // useReducer
  const [state, dispatch] = useReducer(countReducer, initialValue)
  // Make variable `value` and assign state & dispatch
  const value = {state, dispatch}
  return <CountContext.Provider value={value}>{children}</CountContext.Provider>
}

const useCount = () => {
  // fill the default value of useContext
  const context = useContext(CountContext);

  if (context === 'undefined') {
    throw new Error('useCount must be used within a CountProvider')
  }

  return context;
}

export { CountProvider, useCount } 