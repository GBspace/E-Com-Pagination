import * as R from 'ramda';


export const getProductsById = (state,id)=>R.prop(id,state.product);


export const getProducts = (state)=>{

    return state.product;
    
};


export const itemsPerPageCount = state=>{
   return state.ProductsPage.itemsPerPage;
}