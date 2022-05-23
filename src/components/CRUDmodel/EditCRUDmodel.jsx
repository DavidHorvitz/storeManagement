import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { editProduct } from "../../action/editData";
import classes from './CRUDmodel.css';

const EditCRUDmodel = props => {

    const [productName, setProductName] = useState(props.data.productName);
    const [department, setDepartment] = useState(props.data.department);
    const [price, setPrice] = useState(props.data.price);
    const [productId, setProductId] = useState(props.data.productId);
    const [id, setId] = useState(props.data.id);

    useEffect(() => {
        setProductName(props.data.productName);
        setDepartment(props.data.department);
        setPrice(props.data.price);
        setProductId(props.data.productId);
        setId(props.data.id);
    }, [props.data]);

    const saveData = () => {
        const objData = {
            id: id,
            productName: productName,
            department: department,
            price: price,
            productId: productId,
        }
        props.editProduct(objData);
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
            <button onClick={() => saveData()}>Save Changes</button>
        </div>
    )
};

const mapStateToProps = state => {
    return {

    }
}
export default connect(mapStateToProps, { editProduct })(EditCRUDmodel);
