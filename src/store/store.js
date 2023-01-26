import { createStore } from 'redux';
import { reducers } from '../reducers';  // Aqui fazemos o import de todos os Reducers - no caso só temos um


// É dentro da store que passamos todos os Redux
// Nesta store trabalhamos com todos os Reducers

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
