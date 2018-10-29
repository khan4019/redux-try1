import { combineReducers } from 'redux';
import { routerReducer} from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'
import { reducer as testSaga } from '../sagas/testSaga/reducer'


import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({
  posts,
  comments,
  testSaga,
  form: formReducer,
  routing: routerReducer
});

export default rootReducer;


