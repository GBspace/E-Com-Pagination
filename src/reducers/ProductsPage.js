import R from 'ramda';


const initialState = {
    ids: [],
    search: '',
    itemsPerPage:'8',
    totalItems:''
};

export default (state = initialState,action)=>{
    switch(action.type){
        case 'FETCH_PRODUCT_SUCCESS':
            return(
                R.merge(state,{
                    ids: R.pluck('id',action.payload),
                    totalItems:R.pluck('id',action.payload).length
                })
            );
        case 'LOAD_MORE_SUCCESS' :
        {
            const ids = R.pluck('id',action.payload);
            return R.merge(state,{
                ids: R.concat(ids,state.ids)
            });
        }
        case 'SEARCH_PRODUCT' :
        {   console.log("text to be searched is " , action.payload);
            return R.merge(state, {
                search: action.payload
            });
        }
        case 'UPDATE_ITEMS_COUNT':
        {   const itemsPerPage = action.payload;
            return({
                ...state,
                itemsPerPage
            });
        }
       
        default:
            return state;
    }
};