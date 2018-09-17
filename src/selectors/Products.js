import R from 'ramda';


export const getProductsById = (state,id)=>R.prop(id,state.product);


export const getProducts = (state)=>{

    return state.product;
    
};


export const itemsPerPageCount = state=>{
    // console.log(state.ProductsPage.itemsPerPage);
    return state.ProductsPage.itemsPerPage;
}