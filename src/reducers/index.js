import {combineReducers} from 'redux';
import notesReducer from './notesReducers'
import userReducer from './userReducer'
import loadingReducer from './loadingReducer'


const rootReducer = combineReducers({
    notes: notesReducer,
    user: userReducer,
    loading: loadingReducer
});

export default rootReducer;