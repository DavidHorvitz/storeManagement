import axios from 'axios';
export const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT'
const serverUrl = process.env.REACT_APP_SERVER_URL;
export const getAllProducts = () => async dispatch => {
  axios.get(`${serverUrl}/api/get-products`)
    .then(response => {
      dispatch({ type: GET_ALL_PRODUCT, payload: response.data });
    })
    .catch(err => console.log(err));
}