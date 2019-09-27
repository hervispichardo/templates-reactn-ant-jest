import { addReducer } from 'reactn';

function setMainReducer() {

  addReducer('increment', (state, dispatch, payload = 1) => ({
    count: state.count + payload
  }));

}

export default setMainReducer;