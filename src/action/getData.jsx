import axios from 'axios';
export const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT'

export const getAllProducts = () => async dispatch => {
  axios.get('http://192.168.17.142:3010/api/get-products')
    .then(response => {
      dispatch({ type: GET_ALL_PRODUCT, payload: response.data });
    })
    .catch(err => console.log(err));
}