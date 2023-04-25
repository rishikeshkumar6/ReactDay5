import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Product } from './components/ProductCard/Card.js';

const data={
  source:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80',
  brand:'Nike',
  description:'this is a Nike shoes and its price $60',
  price:'$60'
}
const data1={
  source:'https://sugermint.com/wp-content/uploads/2022/06/Rolex-watch.jpg',
  brand:'Rolex',
  description:'this is a Rolex watch its price $1000',
  price:'$1000'
}
const data2={
  source:'https://img.tatacliq.com/images/i6/658Wx734H/MP000000007357028_658Wx734H_20200725121717.jpeg',
  brand:'BMW Watch',
  description:'this is a BMW watch and its price $2000',
  price:'$2000'
}
const data3={
  source:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1660803972361',
  brand:'AirPods',
  description:'this is AirPods and this is price $50',
  price:'$50'
}
const data4={
  source:'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220104033417_BMW_3_series.jpg&w=700&q=90&c=1',
  brand:'BMW Car ',
  description:'this is a BMW car this is price $200000',
  price:'$200000'
}

function product1(){
  alert(data.description)
}
function product2(){
  alert(data1.description)
}
function product3(){
  alert(data2.description)
}
function product4(){
  alert(data3.description)
}
function product5(){
  alert(data4.description)
}
function App() {

  return (
    <div> 
    <Product Info={data} btnclick={product1}/>
    <Product Info={data1} btnclick={product2}/>
    <Product Info={data2} btnclick={product3}/>
    <Product Info={data3} btnclick={product4}/>
    <Product Info={data4} btnclick={product5}/>
    
    </div>
  );
}

export default App;
