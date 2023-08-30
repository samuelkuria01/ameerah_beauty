import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <h2 className='headnav'>Ameerah <span className='navspan'>Beauty</span></h2>
      <div className='navbar'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li> 
                <li>
                    <Link to='/products'>Products</Link>
                </li>
                 <li>
                    <Link to='/blog'>Blog</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
      </div>
    </div>
  )
}

export default Navbar
