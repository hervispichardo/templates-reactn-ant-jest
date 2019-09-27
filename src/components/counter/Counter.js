import React, { useGlobal, useDispatch } from 'reactn';
import { Wrapper } from './Counter.style'
function Counter() {

  const [counter] = useGlobal('count')
  const increment = useDispatch('increment')
  return (
    <Wrapper>
      <div>Counter: {counter}</div>
      <button onClick={ () => increment()}>Increment</button>
    </Wrapper>
  );
}

export default Counter;