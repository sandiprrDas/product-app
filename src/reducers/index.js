import { combineReducers } from 'redux'
import product from './productReducer'
import modal from './modal'


const compareApp = combineReducers({
  product,
  modal
});

export default compareApp