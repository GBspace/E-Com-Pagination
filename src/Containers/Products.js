import React from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from '../actions/Products';
import {getProducts,itemsPerPageCount} from '../selectors/Products';
import * as R from 'ramda';
import Pagination from './Pagination';



class Products extends React.Component{

    constructor(props){
        super(props);
        this.state={
            exampleItems: [],
            pageOfItems: [],
            pageSize:''
        };

        this.onChangePage = this.onChangePage.bind(this);
      
      
    };
    
    onChangePage=(pageOfItems)=>{
        this.setState({ pageOfItems: pageOfItems });
    }
    
  

    async componentDidMount(){
       this.props.fetchProducts();
    }


    componentWillReceiveProps=(nextProps)=>{
		if(this.props.pageSize !== nextProps.pageSize){
			this.setState({
				pageSize: nextProps.pageSize
            });
            
        }
	};

   renderProduct = (product,index)=>{
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
    return{
    fetchProducts: ()=>dispatch(fetchProducts())
}};

const mapStateToProps = (state)=>({
        Products: getProducts(state),
        pageSize:parseInt(itemsPerPageCount(state)),

});

export default connect(mapStateToProps,mapDispatchToProps)(Products);

