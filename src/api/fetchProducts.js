


export const fetchProducts = async () =>{
    const res = await fetch("http://demo8407807.mockable.io/getProducts");
    const json = await res.json();
    // console.log("Response is ", json);
    return json;
};


