import React,{useState} from 'react';
import {FaPlusSquare} from "react-icons/fa";
import {FaMinusSquare} from "react-icons/fa";

const Productitem = () => {
  let [state, setState] = useState({
    product:{
      sno:"AA001",
      image:"https://tse1.mm.bing.net/th?id=OIP.0szmffU1QfSSx4ApUPW_2QHaHa&pid=Api&P=0",
      name:"mi watch",
      price:1500,
      Qty:2

    }
  });
  let {product} =state;
  let increment=()=>{
    setState((state)=>({
        product:{
          ...state.product,
          Qty:state.product.Qty+1
        }
    }))
  };
  let decrement=()=>{
    setState((state)=>({
        product:{
          ...state.product,
          Qty:state.product.Qty-1
        }
    }))
  };
  return (
    <React.Fragment>
       <div className='container mt-3'>
          <div className='row'>
              <div className='col'>
                  <p className='h3 text-success'>Products</p>
                  <p>Industry Buying is India's largest marketplace for Industrial Goods, Business Supplies, MRO Products, Tools, Equipment and many more. Wholesale Price, 7 Days Return, COD. Call us on +91</p>
                  </div>
              </div>
          </div>
        
        <div className='container mt-3'>
          <div className='row'>
            <div className='col'>
               <table className='table table-striped text-center table-hover'>
                  <thead className='bg-dark text-white'>
                     <tr>
                      <th>S.NO</th>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Total</th>
                     </tr>
                  </thead>
                  <tbody>
                    <tr>
                     <td>{product.sno}</td>
                     <td>
                      <img src={product.image} alt="" height={50} width={50}/>
                     </td>
                     <td>{product.name}</td>
                     <td>
                      {product.price}
                      </td>
                     <td>
                     <FaMinusSquare  onClick={decrement}/>
                      {product.Qty}
                      <FaPlusSquare onClick={increment}/>
                      </td>
                     <td>{product.price *product.Qty}</td>
                     </tr>
                  </tbody>

               </table>
            </div>
          </div>
        </div>
      
    </React.Fragment>
  )
}

export default Productitem