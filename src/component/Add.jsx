import React, { useState } from 'react'
import ProductService from '../service/ProductService';

const Add = () => {

const [product,setProduct] =useState({
    productName:"",
    price:"",
    description:"",
    status:""
});

const [msg,setMsg]=useState("");

const handleChange=(e)=>{
  const value=e.target.value;
  setProduct({...product,[e.target.name]:value});
}
const productRegister=(e)=>{
   e.preventDefault();
   ProductService.saveProduct(product).then((res)=>{
    console.log("saved");
    setMsg("product saved");
    setProduct({
        productName:"",
        price:"",
        description:"",
        status:""
    })
   }).catch((err)=>{
    console.log(err);
   });
};

  return (
    <div>
     <div className="container">
       <div className="row">
        <div className="col-md-6 offset-md-3">
            {msg && <p className='fs-4 text-center text-success'>{msg}</p>}
            <div className="card">
                <div className="card-header fs-3 text-center">
                    Add Product
                </div>
                <div className="card-body">
                    <form action="" onSubmit={(e)=>productRegister(e)}>
                        <div className="mb-3">
                            <label htmlFor="">enter name</label>
                            <input type="text" name='productName' className='form-control' onChange={(e)=>handleChange(e)} value={product.productName}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="">enter description</label>
                            <input type="text" name='description' className='form-control' onChange={(e)=>handleChange(e)} value={product.description}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="">enter parice</label>
                            <input type="text" name='price' className='form-control' onChange={(e)=>handleChange(e)} value={product.price}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="">enter status</label>
                            <input type="text" name='status' className='form-control' onChange={(e)=>handleChange(e)} value={product.status}/>
                        </div>
                        <button className="btn btn-md btn-success col-md-12">add Product</button>
                    </form>
                </div>
            </div>
        </div>
       </div>
     </div>
    </div>
  )
}

export default Add
