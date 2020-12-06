import { combineReducers } from 'redux';
import { dishesReducer, selectedDishReducer } from './dishReducer';


export default combineReducers({
    dishes: dishesReducer,
    selectedDish: selectedDishReducer,
})