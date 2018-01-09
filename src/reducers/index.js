import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import authenticationReducer from './authentication';


const rootReducer = combineReducers({
  form: formReducer,
  authenticated: authenticationReducer
})

export default rootReducer;