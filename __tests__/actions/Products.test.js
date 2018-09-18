import {updateItemsCount} from '../../src/actions/Products';

test('should updateItemsCount with passed number' , ()=>{
    const action = updateItemsCount(10);
    expect(action).toEqual({
        type: 'UPDATE_ITEMS_COUNT',
        payload:10
    });
});
