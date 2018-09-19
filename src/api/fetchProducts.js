


export const fetchProducts = async () =>{
    const res = await fetch("http://demo8407807.mockable.io/getProducts");
    const json = await res.json();
   
    return json;
};


