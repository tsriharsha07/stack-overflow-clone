import React from 'react';
import './LeftSideBar.css'
import { NavLink } from 'react-router-dom';


const LeftSideBar = () => {
  return (
    <div className='left-sidebar'>
      <nav className='side-nav'>
        <NavLink to='/' className='side-nav-links' activeclass='active'>
          <p>Home</p>
        </NavLink>
        <div className='side-nav-div'>
          <div>
            <p>PUBLIC</p>
          </div>
          <NavLink to='/questions' className='side-nav-links' activeclass='active' style={{ paddingLeft: '40px' }}>
            <img src='/assets/Globe.svg' alt='Globe' />
            <p style={{ paddingLeft: '10px' }}>Questions</p>
          </NavLink>
          <NavLink to='/tags' className='side-nav-links' activeclass='active' style={{ paddingLeft: '40px' }}>
            <p>Tags</p>
          </NavLink>
          <NavLink to='/tags' className='side-nav-links' activeclass='active' style={{ paddingLeft: '40px' }}>
            <p>Users</p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default LeftSideBar;
