import axios from 'axios';
export const EDIT_PRODUCT = 'EDIT_PRODUCT'

export const editProduct = obj => async dispatch => {
  axios.post('http://192.168.17.135:3010/api/edit-product',{
    data: obj
  })
    .then(response => {
      console.log(response);
      dispatch({ type: EDIT_PRODUCT, payload: obj });
    })
    .catch(err => console.log(err));
}