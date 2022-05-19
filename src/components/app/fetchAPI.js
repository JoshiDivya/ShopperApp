

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'asos2.p.rapidapi.com',
		'X-RapidAPI-Key': '7be3eeea50msh8ef01ec06ced9dap195957jsn73ca7f2ac984'
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