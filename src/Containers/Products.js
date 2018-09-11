import React from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from '../actions/Products';
import {getProducts} from '../selectors/Products';
import {Link} from 'react-router';
import R from 'ramda';
import {loadMore} from '../actions/Products';

class Products extends React.Component{

    constructor(props){
        super(props);
    };
    
    async componentDidMount(){
        this.props.fetchProducts();
     
    }

    renderProduct = (product,index)=>{
        const shortDesc = `${R.take(60,product.description)}...`;
        return (
            <div className='col-sm-3 col-lg-3 col-md-3 book-list' key={index}>
                <div className="thumbnail">
                    <img className='img-thumbnail'
                        src={product.image}
                        alt={product.name}
                    />
                </div>
                <div className="caption">
                    <h4 className="pull-right">
                        ${product.price}
                    </h4>
                    <h4>
                        <Link to={`./Products/${product.id}`}>
                            {product.name}
                        </Link>
                    </h4>
                    <p> {shortDesc}</p>
                    
                </div>
            </div>
        );
    };

    render(){
        const {Products,loadMore} = this.props;
        const prodArr = Object.entries(Products);
        return(
        <div>
            <div className="books row">
                {
                    
                    prodArr.map((product)=>{
                        return this.renderProduct(product[1],product[0]);
                    })
                }
            </div>
            <div className="row">
                <div className="col-md-12">
                    <button className="pull-right btn btn-primary"
                            onClick={loadMore}>
                        Load More
                    </button>
                </div>

            </div>
        </div>            
       
        )};
};

const mapDispatchToProps = (dispatch)=>({
    fetchProducts: ()=>dispatch(fetchProducts()),
    loadMore: ()=>dispatch(loadMore())
});
//ownProps are available here because this component is defined directly on route.
//child componenets must include compose withRoutes
const mapStateToProps = (state)=>({
    Products: getProducts(state)
});

export default connect(mapStateToProps,mapDispatchToProps)(Products);