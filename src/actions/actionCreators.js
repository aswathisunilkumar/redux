import * as ActionTypes from './actionTypes';
export const selectDish = (dish) => {

    return {
        type: ActionTypes.SELECT_DISH,
        payload: dish
    }
}

// export const addComment =(comment) => {
//     return {
//         type:ActionTypes.ADD_COMMENT,
//         payload:{
//             label: comment,
//             id: Math.random()
//         }
//     }
// }

// export const removeComment =(id) => {
//     return {
//         type:ActionTypes.REMOVE_COMMENT,
//         payload:id
//     }
// }
export const addItem = (itemID) => {
    return {
      type: ActionTypes.ADD_ITEM,
      payload: {
        id: itemID,
      },
    };
  };
  
  export const removeItem = (itemID) => {
    return {
      type: actionTypes.REMOVE_ITEM,
      payload: {
        id: itemID,
      },
    };
  };

