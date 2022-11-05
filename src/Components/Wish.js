import React, {useState} from 'react'

const Wish = () => {
    let [state, setState] = useState({
        msg:'Hello',
    });
    let sayGoodmorning=()=>{
        setState((state)=>({
            msg:'Good Morning',
        }));
    };
    let sayGoodEvening=()=>{
        setState((state)=>({
            msg:'Good Evening',
        }));
    };
    let sayGoodafternoon=()=>{
        setState((state)=>({
            msg:'Good Afternoon',
        }));
    };
  return (
    <React.Fragment>
    <div className='container mt-3'>
       <div className='row'>
           <div className='col-md-5'>
               <div className='card'>
                 <div className='card-header bg-secondary text-white'>
                      <p className='h4'>Wish Message</p>
                 </div>
                 <div className='card-body'>
                     <h5 className='display-3'>{state.msg}</h5>
                     <button onClick={sayGoodmorning} className='btn btn-primary btn-sm'>Good morning</button>
                     <button onClick={sayGoodafternoon} className='btn btn-success btn-sm'>Good afternoon</button>
                     <button onClick={sayGoodEvening} className='btn btn-warning btn-sm'>Good Evening</button>
                 </div>
               </div>
           </div>
       </div>

    </div>
 </React.Fragment>
  )
}

export default Wish