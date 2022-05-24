import axios from 'axios';
export const DELETE_PRODUCT = 'DELETE_PRODUCT'
const serverUrl = process.env.REACT_APP_SERVER_URL;
export const deleteProduct = obj => async dispatch => {
  axios.post(`${serverUrl}/api/delete-product`,{
    data: obj
  })
    .then(response => {
      console.log(response);
      dispatch({ type: DELETE_PRODUCT, payload: obj });
    })
    .catch(err => console.log(err));
}