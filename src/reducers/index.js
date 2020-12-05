import { combineReducers } from 'redux';
import { dishesReducer, selectedDishReducer } from './dishReducer';
import { commentReducer }  from './commentReducer';

export default combineReducers({
    dishes: dishesReducer,
    selectedDish: selectedDishReducer,
    postComments:commentReducer
})