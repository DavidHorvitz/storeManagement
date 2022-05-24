import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { deleteProduct } from "../../action/deleteData";
import classes from './Model_Product.css';

const DeleteProduct = props => {

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
        props.deleteProduct(objData);
    };
    return (
        <div className="container">
            <div className="card">
                <h1 className="card_title">Delete Product</h1>
                <p className="card_title-info">Pen By David Horvitz</p>
                <div className="card_form">
                    <div className="input">
                        <input className="input_field" type="text" value={productName} onChange={e => setProductName(e.currentTarget.value)} />
                        <label className="input_label">Product name</label>
                    </div>
                    <div className="input">
                        <input className="input_field" type="text" value={department} onChange={e => setDepartment(e.currentTarget.value)} />
                        <label className="input_label">Department</label>
                    </div>
                    <div className="input">
                        <input className="input_field" type="text" value={price} onChange={e => setPrice(e.currentTarget.value)} />
                        <label className="input_label">Price</label>
                    </div>
                    <div className="input">
                        <input className="input_field" type="text" value={productId} onChange={e => setProductId(e.currentTarget.value)} />
                        <label className="input_label"> Product Id</label>
                    </div>
                    <button className="card_button" onClick={() => saveData()}>Delete Product</button>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {

    }
}
export default connect(mapStateToProps, { deleteProduct })(DeleteProduct);
