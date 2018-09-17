import React from 'react';
import Dropdown from './Dropdown';
import TotalProducts from './TotalProducts';

const Layout = ({children})=>{
    return (
        <div className="view-container">
            <div className="container">  
            
                <div className="row head-container">
                    <div className="col-sm-3 col-lg-3 col-md-3 pull-left">
                        <TotalProducts/> 
                    </div>
                    <div className="col-sm-3 col-lg-3 col-md-3 pull-right">
                        <Dropdown/>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-12">
                        {children}
                    </div>
                </div>
            </div>
            
        </div>
    )
};

export default Layout;