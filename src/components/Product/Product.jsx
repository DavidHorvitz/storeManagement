import React, { useState } from "react";

import CreateProduct from "../CRUD_Product/CreateProduct";
import EditProduct from "../CRUD_Product/EditProduct";
import DeleteProduct from "../CRUD_Product/DeleteProduct";
import DisplayProducts from "../DisplayProducts/DisplayProducts";
import Header from "./ModelSite/Header";
import { Link, Route, Routes } from "react-router-dom";


const Product = props => {

    const [statusForm, setStatusForm] = useState('create');
    const [dataEditProduct, setDataEditProduct] = useState({});
    const [dataDeleteProduct, setDataDeleteProduct] = useState('');
    // console.log('dataEditProduct');
    // console.log(dataEditProduct);
    const handlerEditProduct = data => {
        setStatusForm('edit');
        setDataEditProduct(data);
    }
    const handlerDeleteProduct = data => {
        setStatusForm('delete');
        setDataDeleteProduct(data);
    }

    return (<div>



        <h1 >Online shop Management</h1>

        <div>
            <Link className="link" to="/create-product">Create Product</Link>
            <br />
            <Link to="/product">List Of Product</Link>
            <br />
            <Link to="/edit-product">Edit Product</Link>
            <br />
            <Link to="/delete-product">Delete Product</Link>

        </div>

        <Routes >
            <Route path="create-product" element={<CreateProduct />} />
            <Route path="edit-product" element={<EditProduct data={dataEditProduct} />} />
            <Route path="delete-product" element={<DeleteProduct />} />
            <Route path="product" element={<DisplayProducts />} />

        </Routes>


        {/* {statusForm === 'create' ?
            <CRUDmodel /> :
            <EditCRUDmodel data={dataEditProduct} />
        } */}



        <DisplayProducts handlerEditProduct={handlerEditProduct} />
        {/* <DisplayProducts handlerDeleteProduct={handlerDeleteProduct} /> */}

    </div>)
};
export default Product;