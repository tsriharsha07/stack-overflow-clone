import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import Avatar from '../Avatar/Avatar';
import { useSelector } from 'react-redux';


const Navbar = () => {
  const {user,isAuthenticated}=useSelector(state=>state.user)
  console.log(isAuthenticated);
  return (
    <nav className='main-nav'>
        <div className='navbar'>
            <Link to="/" className='nav-item nav-logo'>
               <img src='/assets/logo.png' alt='logo' />
            </Link>
            <Link to='/' className='nav-item nav-btn'>About</Link>
            <Link to='/' className='nav-item nav-btn'>Products</Link>
            <Link to='/' className='nav-item nav-btn'>For Teams</Link>
            <form>
              <input type='text' placeholder='Search...'/>
              <i className='fa fa-search'></i>
            </form>
            {user === null ? (
              <Link to='/login' className='nav-item nav-links'>
                Login
              </Link>
            ):
            (
              <>
                 <Avatar backgroundColor='#009dff' px='10px' py='7px' borderRadius='50%' color='white'><Link to='/profile' style={{color:'whitesmoke', textDecoration:'none'}}>M</Link></Avatar>
                 <button className='nav-item nav-links'>Logout</button>
              </>
            )}
        </div>
    </nav>
  );
}

export default Navbar;
