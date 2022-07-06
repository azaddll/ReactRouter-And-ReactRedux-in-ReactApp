import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports';
function Header() {
    const authData = useSelector(state => state.auth);
    

  return (
    <nav className='header-style'>
        <Link className='header-link-item' to={'/'}>main</Link>
        <Link className='header-link-item' to={'/Home'}>Home</Link>
        <Link className='header-link-item' to={'/About'}>About</Link>
        <Link className='header-link-item' to={'/Login'}>Login</Link>

       <h3>{'AuthStatus: ' + authData.auth}</h3>
    </nav>
  )
}

export default Header