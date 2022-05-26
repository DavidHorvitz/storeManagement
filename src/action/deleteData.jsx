import axios from 'axios';
export const DELETE_PRODUCT = 'DELETE_PRODUCT'
const serverUrl = process.env.REACT_APP_SERVER_URL;
export const deleteProduct = productId => async dispatch => {
  axios.post(`${serverUrl}/api/delete-product`,{
    data: productId
  })
    .then(() => {
      dispatch({ type: DELETE_PRODUCT, payload: productId });
    })
    .catch(err => console.log(err));
}