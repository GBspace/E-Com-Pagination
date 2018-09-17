import React from 'react';
import {connect} from 'react-redux';


export const TotalProducts = (props)=>{
    return(
        <div>
            <h4> All Products</h4>
            <span className="label label-default">Total Products : {props.totalProd}</span>
        </div>
    );
};

const mapStateToProps=(state)=>({
    totalProd:state.ProductsPage.totalItems
});

export default connect(mapStateToProps)(TotalProducts);