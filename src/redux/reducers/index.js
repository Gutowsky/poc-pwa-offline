import productsReducer from './productsReducer';
import quotesRecuder from './quotesReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  productsStore: productsReducer,
  quotesStore: quotesRecuder
});

export default rootReducer;