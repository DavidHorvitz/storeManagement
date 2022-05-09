import React, { useState } from "react";
import { connect } from "react-redux";
import { creatProduct } from "../../action/setData";
import classes from './CRUDmodel.css';

const CRUDmodel = props => {
    
    const [productName, setProductName] = useState('');
    const [department, setDepartment] = useState('');
    const [price, setPrice] = useState('');
    const [productId, setProductId] = useState('');

    const saveData = () => {
        const objData = {
            productName: productName,
            department: department,
            price: price,
            productId: productId,
        }
        props.creatProduct(objData);
    };
    return (
        <div className="modelCrud">
            <div >
                <input type="text" value={productName} onChange={e => setProductName(e.currentTarget.value)} />     Product name
            </div>
            <div>
                <input type="text" value={department} onChange={e => setDepartment(e.currentTarget.value)} />     Department
            </div>
            <div>
                <input type="text" value={price} onChange={e => setPrice(e.currentTarget.value)} />  Price
            </div>
            <div>
                <input type="text" value={productId} onChange={e => setProductId(e.currentTarget.value)} />    Product Id
            </div>
            <button onClick={() => saveData()}>save</button>
        </div>
    )
};

const mapStateToProps = state => {
    return {

    }
}
export default connect(mapStateToProps, { creatProduct })(CRUDmodel);
