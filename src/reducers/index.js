import { combineReducers } from 'redux';  // Esta função é necessário para combinar todos os Reducers
import { reducers as frutaReducers } from './frutas.reducer';
// import { reducers as vegetaisReducers } from './vegetias.reducer';  // Exemplo de como escalar para aplicações maiores

// Nesta função faz-se a combinação dos Reducers, que no caso só temos um

const reducers = combineReducers({
  frutaReducers,
  // vegetaisReducers  -> não existe, fica apenas como exemplo
});

export { reducers };
