

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': Process.env.RAPIDAPI_HOST,
		'X-RapidAPI-Key': Process.env.RAPIDAPI_KEY
	}
};


export function getCategoryList(){
   return fetch('https://asos2.p.rapidapi.com/categories/list?country=US&lang=en-US', options)
	.then(response => response.json())
  
}




export function getProductList(){
    return fetch('https://fakestoreapi.com/products')
    .then(data => data.json())
}
