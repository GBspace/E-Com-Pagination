import R from 'ramda';


export const getProductsById = (state,id)=>R.prop(id,state.product);


export const getProducts = (state)=>{

    return state.product;
    
};

export const getRenderedProductsLength = state => R.length(state.product);


