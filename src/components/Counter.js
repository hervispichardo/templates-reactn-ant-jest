import React, { useGlobal, useDispatch } from 'reactn';

function Counter() {

  const [counter] = useGlobal('count')
  const increment = useDispatch('increment')
  return (
    <div>
      <div>Counter: {counter}</div>
      <button onClick={ () => increment()}>Increment</button>
    </div>
  );
}

export default Counter;