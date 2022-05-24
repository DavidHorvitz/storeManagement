import React from 'react';
import './DisplayProducts.css';
import { connect } from 'react-redux';

const DisplayProducts = props => {
  console.log(props.productData);
  return (
    <div className="">
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
        <div onClick={() => props.handlerEditProduct(item)}>
          <table>
            <tr>
              <td>{item.id}</td>
              <td>{item.productName}</td>
              <td>{item.department}</td>
              <td>{item.price} </td>
              <td>{item.productId} </td>

            </tr>

          </table>
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
export default connect(mapStateToProps, {})(DisplayProducts);
