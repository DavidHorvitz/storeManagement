import React, { useState } from "react";

import CreateProduct from "../CRUD_Product/CreateProduct";
import EditProduct from "../CRUD_Product/EditProduct";
import DisplayProducts from "../DisplayProducts/DisplayProducts";
import Header from "./ModelSite/Header";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import './Product.scss'

const Product = props => {
    const navigate = useNavigate();
    const [statusForm, setStatusForm] = useState('create');
    // const [dataEditProduct, setDataEditProduct] = useState({});
    // const [dataDeleteProduct, setDataDeleteProduct] = useState('');
    // console.log('dataEditProduct');
    // console.log(dataEditProduct);
    // const handlerEditProduct = data => {
    //     setStatusForm('edit');
    //     setDataEditProduct(data);
    // }
   

    return (<div>



        <h1 >Online shop Management</h1>

        <div className="button_Continer">
            {/* <Link className="link" to="/create-product">Create Product</Link> */}
            <div  className="create_button" onClick={() => navigate("/create-product")}>Create Product</div>
            {/* <Link to="/product">List Of Product</Link> */}
           

        </div>

        <Routes >
            <Route path="create-product" element={<CreateProduct />} />
            <Route path="edit-product" element={<EditProduct />} />
            <Route path="product" element={<DisplayProducts />} />

        </Routes>


        {/* {statusForm === 'create' ?
            <CRUDmodel /> :
            <EditCRUDmodel data={dataEditProduct} />
        } */}



        {/* <DisplayProducts handlerEditProduct={handlerEditProduct} /> */}
        {/* <DisplayProducts handlerDeleteProduct={handlerDeleteProduct} /> */}

    </div>)
};
export default Product;