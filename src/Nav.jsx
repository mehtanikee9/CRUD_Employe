import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
  <nav>
        <div className='logoblock'>
            {/* <img src="https://iconape.com/wp-content/png_logo_vector/ecommerce.png" alt="" /> */}
            <h1 className='tracking-in-expand'>Employee</h1>
        </div>
        <div className='menublock'>
            <ol>
                <li>
                    <Link to={"/employe"}>Employee Page</Link>
                </li>
                <li><Link to={"/"}>Employe List</Link></li>
            </ol>
        </div>
  </nav>
  )
}

export default Nav