import React from 'react'
import ReactDOM  from 'react-dom'
import App from './app'
import {FaCamera} from 'react-icons/fa'
import './main.css'
function Advance(){
  return(
    <div className='nav-bar'>
    <div className='header'>
       <h1><FaCamera className='cam'/><span>movie</span> camp</h1>
   <div className='cover-movie'>
   <div className='design-image'>
    
   </div>
   </div>
    </div>
   
  
    <App/>
    </div>
  )
}

ReactDOM.render(<Advance/>,document.getElementById('root'))