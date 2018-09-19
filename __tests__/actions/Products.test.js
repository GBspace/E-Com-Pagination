import {updateItemsCount,fetchProducts} from '../../src/actions/Products';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);


test('should updateItemsCount with passed number' , ()=>{
    const action = updateItemsCount(10);
    expect(action).toEqual({
        type: 'UPDATE_ITEMS_COUNT',
        payload:10
    });
});


