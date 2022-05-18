import axios from 'axios';
export const SET_PRODUCT = 'SET_PRODUCT'

export const creatProduct = obj => async dispatch => {
  axios.post('http://192.168.100.3:3010/api/create-product',{
    data: obj
  })
    .then(response => {
      console.log(response);
      dispatch({ type: SET_PRODUCT, payload: response.data });
    })
    .catch(err => console.log(err));
}