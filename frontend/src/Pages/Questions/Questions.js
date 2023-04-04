import React from 'react';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import HomeMainBar from '../../components/HomeMainBar/HomeMainBar';
import RightSideBar from '../../components/RightSideBar/RightSideBar';
import '../../App.css'

const Questions = () => {
  return (
    <div className='home-container-1'>
       <LeftSideBar/>
       <div className='home-container-2'>
          <HomeMainBar/>
          <RightSideBar/>

       </div>
    </div>
  );
}

export default Questions;