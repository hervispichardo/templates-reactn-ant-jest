import React, { useGlobal } from 'reactn';
import Counter from '../components/Counter'

function Home() {
  const [counter] = useGlobal('count')
  return (
    <div>
      Home counter: { counter }
      <Counter />
    </div>
  );
}

export default Home;