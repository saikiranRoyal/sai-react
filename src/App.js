import React, { Fragment } from 'react';
import './App.css'
import Counter from './Components/Counter';
import Wish from './Components/Wish';
import Productitem from './Components/Productitem';



const App = () => {
  return (
    <React.Fragment>
    <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
      <a href="/" className='navbar-brand'>React with Event handlers</a>
    </nav>
    {/* <Counter/> */}
      {/* <Wish/> */}
      <Productitem />

    </React.Fragment>
 
  )
}

export default App