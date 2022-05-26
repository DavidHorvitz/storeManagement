import axios from 'axios';
export const EDIT_PRODUCT = 'EDIT_PRODUCT'
const serverUrl = process.env.REACT_APP_SERVER_URL;
export const editProduct = (obj,navigate ) => async dispatch => {
  axios.post(`${serverUrl}/api/edit-product`,{
    data: obj
  })
    .then(response => {
      navigate('/product')
      console.log(response);
      dispatch({ type: EDIT_PRODUCT, payload: obj });
    })
    .catch(err => console.log(err));
}