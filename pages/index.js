
import { Inter } from '@next/font/google'
import axios from 'axios';
import { useState } from 'react';


export default function Home() {
  const [products, setProducts]  = useState([]);
  let name = "Iphone 14";
  let description = " this is a description about iphone 14 product in ecommerce app";
  let price = "899";
  // fetch data from Rapid Api :
  const options = {
  method: 'GET',
  url: 'https://real-time-product-search.p.rapidapi.com/search',
  params: {q: 'iPhone', country: 'us', language: 'en'},
  headers: {
    'X-RapidAPI-Key': '4050007a13msh62bbd2cd8544a11p14f3e5jsn28c98639525f',
    'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com'
  }
};

axios.request(options).
then(response => {
  console.log(response.data.status);
  // check if response status is 200 : 
  if ( response.data.status === 'OK'){
    setProducts( response.data );
    console.log(products);
  }
}).catch(function (error) {
	console.error(error);
})
  return (
    /*products.array.forEach(
      element => {
      return(
        <div className="p-4 w-52">
          <div className="bg-blue-100 p-5 rounded-xl">
            <img src={element.product_photos[0]} alt=""/>
          </div>
          <div className="mt-2">
            <h3 className="font-bold text-lg">{element.product_title}</h3>
          </div>
          <p className="text-sm mt-1 leading-4 text-gray-500">{element.product_description}</p>
          <div className="flex mt-1">
            <div className="text-2xl font-bold grow">{element.offer.price}</div>
              <button className="bg-emerald-400 text-white py-1 px-3 rounded-xl">+</button>
            </div>
          </div>
        )
        ;   
    }
    )*/
    <h1> Product list </h1>
  );
}
