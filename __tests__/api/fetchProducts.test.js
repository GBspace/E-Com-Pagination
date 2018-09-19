import {fetchProducts} from '../../src/api/fetchProducts';


describe('fetching product details',()=>{
    it('fetching to see if the response is 200 OK ',()=>{
        window.fetch=jest.fn().mockImplementation(()=>({
            status:200,
            json:()=>new getPromise((resolve,reject)=>{
                resolve({
                    products:[]
                });
            })
        }));
        expect(fetchProducts()).resolves.toEqual({products:[]})  
    });


});