import React from 'react';
import './DisplayProducts.scss';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteProduct } from '../../action/deleteData';

const DisplayProducts = props => {

  console.log(props.productData);
  const navigate = useNavigate();
  const handlerEditProduct = data => {
    navigate('/edit-product', {
      state: {
        data: data,
      }
    });
  };

  const deleteProduct = productId => {
    props.deleteProduct(productId);
  };

  return (
    <div className="DisplayProducts_continer">
      <table>
        <tr>
          <th>Id</th>
          <th>Product Name</th>
          <th>Department</th>
          <th>Price</th>
          <th>Product Id</th>

        </tr>
      </table>
      {props.productData.map((item, index) => (
        <div className='item_continer'  >
          <table>
            <tr>
              <td>{item.id}</td>
              <td>{item.productName}</td>
              <td>{item.department}</td>
              <td>{item.price} </td>
              <td>{item.productId} </td>

            </tr>

          </table>
          <div className='button_continer'>
            <div className='edit_button' onClick={() => handlerEditProduct(item)}>edit</div>
            <div className='delete_button' onClick={() => deleteProduct(item.id)}>delete</div>
          </div>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    productData: state.productData
  }
}
export default connect(mapStateToProps, { deleteProduct })(DisplayProducts);
