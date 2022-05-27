import axios from 'axios';
export const SET_PRODUCT = 'SET_PRODUCT'
const serverUrl = process.env.REACT_APP_SERVER_URL;
export const creatProduct = (obj, navigate) => async dispatch => {
  axios.post(`${serverUrl}/api/create-product`,{
    data: obj
  })
    .then(response => {
      console.log(response);
      navigate('/')
      // navigate('/product')
      dispatch({ type: SET_PRODUCT, payload: response.data });
    })
    .catch(err => console.log(err));
}