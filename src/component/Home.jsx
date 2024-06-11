import React, { useEffect, useState } from 'react'
import ProductService from '../service/ProductService';
import { Link } from 'react-router-dom';

const Home = () => {
  const [msg,setMsg]=useState("");
  const [productList , setProductList] =useState([]);

  useEffect(()=>{
    init();
  },[])

  const init=()=>{
    ProductService.getAllProduct().then((res)=>{
      console.log(res.data);
      setProductList(res.data);
    }).catch((err)=>console.log(err));
  }

  const deleteProduct=(id)=>{
     ProductService.deleteProduct(id).then((res)=>{
       setMsg("deleted");
       init();
     }).catch((err)=>console.log(err));
  }

  return (
   <>
   <div className="container">
    <div className="row">
    {msg && <p className='fs-4 text-center text-success'>{msg}</p>}
    <table class="table">
  <thead>
    <tr>
      <th scope="col">sl no</th>
      <th scope="col">name</th>
      <th scope="col">desc</th>
      <th scope="col">price</th>
      <th scope="col">status</th>
      <th scope="col">action</th>
    </tr>
  </thead>
  <tbody>
   
     {productList.map((p,num)=>(
       <tr>
     <td>{num++}</td>
     <td>{p.productName}</td>
     <td>{p.description}</td>
     <td>{p.price}</td>
     <td>{p.status}</td>
     <td><Link to={'editProduct/'+p.id} className='btn btn-sm btn-primary mx-2'>edit</Link>
     <button  onClick={()=>deleteProduct(p.id)} className='btn btn-sm btn-danger'>delete</button></td>
     </tr>
     ))}
  

   
  </tbody>
</table>
    </div>
   </div>
   </>
  )
}

export default Home
