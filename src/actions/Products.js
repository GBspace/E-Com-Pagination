import {fetchProducts as fetchProductsApi}  from '../api/fetchProducts';

export const fetchProducts = ()=>{
    
    return async (dispatch) => {
        try{
            dispatch({
                type: 'FETCH_PRODUCT_START'
            });
            const Products = await fetchProductsApi();
            // console.log("Products are ", Products);
            dispatch({
                type: 'FETCH_PRODUCT_SUCCESS',
                payload: Products
            });
        }catch(err){
            // console.log("Error ", err);
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


// export const fetchUpdatedItemsCount=()=>({
//     type: 'FETCH_UPDATED_COUNT'
// });
// export const loadMore = ()=>{
    
