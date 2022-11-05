import React, {useState} from 'react'

const Counter = () => {
  let [state, setState] = useState({
    count:0
  });
  let incrbtn=()=>{
    setState((state)=>({
       count : state.count +1
    }));
  };
  let decrbtn=()=>{
    setState((state)=>({
       count : state.count -1
    }));
  };
  return (
    <React.Fragment>
      <div className='container mt-3'>
        <div className='row'>
           <div className='col-md-3'>
              <div className='card'>
                <div className='card-header bg-primary'>
                  <h2 >counter app</h2>
                </div>
                <div className='card-body'>
                <h4>{state.count}</h4>
                  <button onClick={incrbtn} className='btn btn-success btn-sm'>Increment</button>
                  <button onClick={decrbtn} className='btn btn-warning btn-sm'>Decrement</button>
                 
                   </div>
                
              </div>
           </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Counter