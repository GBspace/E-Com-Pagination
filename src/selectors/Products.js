import R from 'ramda';


export const getProductsById = (state,id)=>R.prop(id,state.product);


export const getProducts = (state)=>{
    // const Products = R.map(id=>getProductsById(state,id),state.ProductsPage.ids);
    // return Products;

    // const activeCategoryId = getActiveCategoryId(ownProps);
    // console.log(ownProps);
 
  
    // const Products = R.map(id=>getProductsById(state,id));
    // console.log("Products are ", Products);
    // return Products;
    // return R.indexBy(R.prop('id'), state.product);
    return state.product;
    
};

export const getRenderedProductsLength = state => R.length(state.ProductsPage.ids);




// export const getActiveCategoryId = ownProps=>{
//     // console.log("ownProps " , ownProps);
//     return R.path(['params','id'],ownProps);
// };


