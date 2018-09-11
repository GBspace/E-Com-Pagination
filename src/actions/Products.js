import {fetchProducts as fetchProductsApi,
        loadMore as loadMoreApi,
        fetchProductById as fetchProductByIdApi}  from '../api/fetchProducts';
import {getRenderedProductsLength} from '../selectors/Products';

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

export const loadMore = ()=>{
    
    return async (dispatch,getState) => {
        const offset = getRenderedProductsLength(getState());
        try{
            dispatch({
                type: 'LOAD_MORE_START'
            });
            const Products = await loadMoreApi({offset});
            dispatch({
                type: 'LOAD_MORE_SUCCESS',
                payload: Products
            });
        }catch(err){
            dispatch({
                type: 'LOAD_MORE_FAILURE',
                payload: err,
                error: true
            });
        };
    };
};

export const fetchProductById = id=>{
    return async (dispatch,getState) => {
        const offset = getRenderedProductsLength(getState());
        try{
            dispatch({
                type: 'FETCH_PRODUCT_BY_ID_START'
            });
            const product = await fetchProductByIdApi(id);
            dispatch({
                type: 'FETCH_PRODUCT_BY_ID_SUCCESS',
                payload: product
            });
        }catch(err){
            dispatch({
                type: 'FETCH_PRODUCT_BY_ID_FAILURE',
                payload: err,
                error: true
            });
        };
    };
};

