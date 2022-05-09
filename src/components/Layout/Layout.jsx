import React from "react";
import classes from './Layout.css';
import CRUDmodel from "../CRUDmodel/CRUDmodel";
import DisplayProducts from "../DisplayProducts/DisplayProducts";


const Layout = (props) => (
    <div>
        <h1 >Online shop Management</h1>
        <CRUDmodel/>
        <DisplayProducts />
    </div>

) ;
export default Layout;