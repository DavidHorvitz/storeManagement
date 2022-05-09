import React from 'react';
import './DisplayProducts.css';
import { connect } from 'react-redux';

const DisplayProducts = props => {
  console.log(props.productData);
  return (
    <div className="">
      {props.productData.map((item, index) => (
        <div>Product: {item.productName} --- id: {item.id}</div>
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    productData: state.productData
  }
}
export default connect(mapStateToProps, {  })(DisplayProducts);
