import * as ActionTypes from './actionTypes';
export const selectDish = (dish) => {

    return {
        type: ActionTypes.SELECT_DISH,
        payload: dish
    }
}

