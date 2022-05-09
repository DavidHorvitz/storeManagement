import { GET_ALL_PRODUCT } from '../action/getData';
import { SET_PRODUCT } from '../action/setData';
const defaultState = []
export default (state = defaultState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCT:
            return action.payload;
        case SET_PRODUCT:
            const newState = [...state];
            newState.push(action.payload);
            return newState;
        default:
            return state;

    }
}