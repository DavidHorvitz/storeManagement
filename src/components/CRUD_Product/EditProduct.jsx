import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { editProduct } from "../../action/editData";
import classes from './Model_Product.css';
import ButtonClose from "../Templete/ButtonClose/ButtonClose";
import { useLocation, useNavigate,  } from "react-router-dom";

const EditProduct = props => {

    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state.data;

    const [productName, setProductName] = useState(data.productName);
    const [department, setDepartment] = useState(data.department);
    const [price, setPrice] = useState(data.price);
    const [productId, setProductId] = useState(data.productId);
    const [id, setId] = useState(data.id);
    const [close, setClose] = useState(true);

    useEffect(() => {
        if (!close) navigate('/product');
    }, [close]);

    useEffect(() => {
        setProductName(data.productName);
        setDepartment(data.department);
        setPrice(data.price);
        setProductId(data.productId);
        setId(data.id);
    }, [data]);

    const saveData = () => {
        const objData = {
            id: id,
            productName: productName,
            department: department,
            price: price,
            productId: productId,
        }
        props.editProduct(objData,navigate);
    };
    return (
        <div className="container">
            <ButtonClose close={setClose}/>
            <div className="card">
                <h1 className="card_title">Edit Product</h1>
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
                    <button className="card_button" onClick={() => saveData()}>Save Changes</button>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {

    }
}
export default connect(mapStateToProps, { editProduct })(EditProduct);
