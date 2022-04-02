import React from 'react'
import './header.style.css'
import { Link } from "react-router-dom";


export default function Header() {
  return (
   <div>
    
      <div className='menu-container'>
        <nav className='nav-origin'>
           {/* <Link to='/' className='nav-menu'>Inicio</Link>
          <Link to='/galeria' className='nav-menu'>Galeria</Link> */}
          <a className='nav-menu'>inicio</a>
          <a className='nav-menu'>sobre la api</a>
          
        </nav>
      </div>
      </div>
    

    
  )
}



