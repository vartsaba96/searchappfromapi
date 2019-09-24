import { combineReducers } from 'redux';
import persons from './persons';
import find from './find';

const rootReducer = combineReducers({
    persons,
    find
});

export default rootReducer;