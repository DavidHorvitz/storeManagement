import React, { useState } from "react";
import classes from './Layout.css';
import CRUDmodel from "../CRUDmodel/CRUDmodel";
import DisplayProducts from "../DisplayProducts/DisplayProducts";
import EditCRUDmodel from "../CRUDmodel/EditCRUDmodel";


const Layout = props => {

    const [statusForm, setStatusForm] = useState('create');
    const [dataEditProduct, setDataEditProduct] = useState({});
    console.log('dataEditProduct');
    console.log(dataEditProduct);
    const handlerEditProduct = data => {
        setStatusForm('edit');
        setDataEditProduct(data);
    }

    return (<div>
        <h1 >Online shop Management</h1>
        {statusForm === 'create' ?
            <CRUDmodel /> :
            // <div></div>
            <EditCRUDmodel data={dataEditProduct} />
        }

        <DisplayProducts handlerEditProduct={handlerEditProduct} />
    </div>)
};
export default Layout;