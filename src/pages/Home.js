import React, { useGlobal } from 'reactn';
import Counter from '../components/counter'
import Posts from '../containers/Posts'




function Home() {
  const [counter] = useGlobal('count')

  return (
    <div>
      Home counter: { counter }
      <Counter />
      <Posts />
    </div>
  );
}

export default Home;