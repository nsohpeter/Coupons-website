import React from 'react'
import './Sidebar.css'
import  { FaTimes }  from 'react-icons/fa';
import { closeSidebar } from '../../Features/Sidebar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';

const Sidebar = () => {
    const {isSidebarOpen} = useSelector((store) => store.Sidebar)
   const dispatch = useDispatch()
  return (
    <div className={`${isSidebarOpen ? 'sidebar-wrapper show': 'sidebar-wrapper'}`}>
     <div className='sidebar'>
      <button className='close-btn' onClick={()=> dispatch(closeSidebar())} >
      <FaTimes />
      </button>

      <div className="sidebar-links">
       
      </div>
     </div>
    </div>
  )
}

export default Sidebar
