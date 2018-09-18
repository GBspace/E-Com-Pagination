import React from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from '../actions/Products';
import {getProducts} from '../selectors/Products';
import * as R from 'ramda';
import Pagination from './Pagination';

class Products extends React.Component{

    constructor(props){
        super(props);
        // console.log("Constructor");
        this.state={
            // productsPerPage:8,
            // currentPage:1
            exampleItems: [],
            pageOfItems: []
        };

        // this.handleClick=this.handleClick.bind(this.handleClick);
        this.onChangePage = this.onChangePage.bind(this);
    };
    
    onChangePage(pageOfItems) {
        // console.log(" update state with new page of items");
        this.setState({ pageOfItems: pageOfItems });
    }
    
    async componentDidMount(){
        // console.log("inside componentDidMount");
       this.props.fetchProducts();
    }

    // componentDidUpdate(prevProps) {
    //     // Typical usage (don't forget to compare props):
    //     if (this.props.Products !== prevProps.Products) {
    //     //   this.fetchData(this.props.userID);
    //     console.log("need to fetch data again");
    //     }
    //   }

    // componentDidUpdate(prevProps) {
    //     Object.entries(this.props).forEach(([key, val]) =>
    //       prevProps[key] !== val && console.log(`Prop '${key}' changed`)
    //     );
    //   }

    renderProduct = (product,index)=>{
        // console.log("rendering product ", product);
        const shortDesc = `${R.take(60,product.description)}...`;
        return (
            <div className='col-sm-3 col-lg-3 col-md-3 book-list' key={index}>
                <div className="thumbnail">
                   
                    <img className='img-thumbnail'
                        src={product.product_image}
                        alt={product.product_name}
                    />
                    <div className="caption">
                    <h5> {product.product_name} </h5>
                    <h6> {shortDesc}</h6>
                    <h4>
                        ${product.price}
                    </h4>
                 
                   
                    
                </div>
                </div>
                
            </div>
        );
    };

    render(){
        const {Products} = this.props;
        console.log("rendering" ,  this.state.pageSize);
        // console.log("Updated page size is ", this.state.pageSize);
        return(
        <div>
            <div className="books row">
                {
                    this.state.pageOfItems.map((product,index)=>{
                        return this.renderProduct(product,index);
                    })
                }
            </div>
            <div className="row">
                <div className="col-md-12">
                    <Pagination className=" pull-right"
                        items={Object.values(Products)}
                        onChangePage={this.onChangePage}
                        pageSize={this.state.pageSize}
                    >
                    </Pagination>
                </div>
            </div>
           
        </div>            
       
        )};
};

const mapDispatchToProps = (dispatch)=>{
    // console.log("mapDispatchToProps");
    return{
    fetchProducts: ()=>dispatch(fetchProducts())
}};

const mapStateToProps = (state)=>{
    // console.log("mapStateToProps");
    // console.log(" getProducts(state) ",  getProducts(state));
    return{
        Products: getProducts(state)
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Products);

