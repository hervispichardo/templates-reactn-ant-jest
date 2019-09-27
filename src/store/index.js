import { setGlobal } from 'reactn';
import setReducers from './reducers'

function makeStore() {
  console.log('Inicializing Store')
  setGlobal({
    user: null,
    count: 0
  });

  console.log('Set Reducers')
  setReducers()
}

export { makeStore };
