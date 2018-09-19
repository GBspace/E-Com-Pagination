import {fetchProducts as fetchProductsApi}  from '../api/fetchProducts';

export const fetchProducts = ()=>{
    
    return async (dispatch) => {
        try{
            dispatch({
                type: 'FETCH_PRODUCT_START'
            });
            const Products = await fetchProductsApi();
            
            dispatch({
                type: 'FETCH_PRODUCT_SUCCESS',
                payload: Products
            });
        }catch(err){
            
            dispatch({
                type: 'FETCH_PRODUCT_FAIL',
                payload: err,
                error: true
            });
        };
    };
};

export const updateItemsCount=(itemsCount)=>({
    type: 'UPDATE_ITEMS_COUNT',
    payload: itemsCount
});



    
