import React from 'react';

import { useCount } from './CountContext';

const Counter = () => {
  // set dispatch and state count from useCount()
  const {state, dispatch} = useCount();
  
  return (
    <>
      {/* change 0 with count from context */}
      Count: {state.counter}
      <div>
        {/* use dispatch for onClick method */}
        <button className="count-button" onClick={() => {dispatch({type: "increment"})}} >+</button>
        <button className="count-button" onClick={() => {dispatch({type: "decrement"})}}>-</button>
      </div>
    </>
  );
}

export default Counter;