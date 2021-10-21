import React from 'react';
import { Link } from 'react-router-dom';
import Chart from '../chart/Chart';
import { productData } from '../../data';
import './productEdit.css';

const productEdit = () => {
    return (
        <div className="productEdit">
            <div className="productEditContainer">
                <h1 className="productEditTitle">Product</h1>
                <Link to="/newProduct">
                    <button className="productEditAddButton">Create</button>
                </Link>
            </div>
            <div className="productEditTop">
                <div className="productEditTopLeft">
                    <Chart title="Sales Performance" data={productData} grid datakey="sales" />
                </div>
                <div className="productEditTopRight">
                    <div className="productEditInfoTop">
                        <img src="https://i.pinimg.com/564x/03/d7/c4/03d7c44f97b9b40facec6064df85107c.jpg" alt="" className="productEditImg" />
                        <span className="productEditName">buttermilk pancakes</span>
                    </div>
                    <div className="productEditInfoBottom"></div>
                </div>
            </div>
            <div className="productEditBottom"></div>
        </div>
    )
}

export default productEdit
