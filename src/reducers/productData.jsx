import { EDIT_PRODUCT } from '../action/editData';
import { GET_ALL_PRODUCT } from '../action/getData';
import { SET_PRODUCT } from '../action/setData';
import { DELETE_PRODUCT } from '../action/deleteData';
const defaultState = []
export default (state = defaultState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCT:
            return action.payload;
        case SET_PRODUCT:
            const newState = [...state];
            newState.push(action.payload);
            return newState;
        case EDIT_PRODUCT:
            const newStateA = [...state];
            return newStateA.map(item => {
                if (item.id === action.payload.id) {
                    return { ...item, ...action.payload }
                } else {
                    return item
                }
            });
        case DELETE_PRODUCT:
            const newStateB =  state.filter(item => {
                if (item.id === action.payload) {
                    return false
                } else {
                    return true
                }
            });
            return newStateB;
        default:
            return state;

    }
}