import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaUserAltSlash,
    FaBookmark,
    FaSignOutAlt,
    FaDollarSign,
}from "react-icons/fa";
import logo from '../imgs/logo.png'
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/Customer",
            name:"Customer",
            icon:<FaUserAlt/>
        },
        {
            path:"/Driver",
            name:"Driver",
            icon:<FaUserAltSlash/>
        },
        {
            path:"/Bookings",
            name:"Bookings",
            icon:<FaBookmark/>
        },
        {
            path:"/Unpaid",
            name:"Unpaid",
            icon:<FaDollarSign/>
        },
        {
            path:"/Reports",
            name:"Reports",
            icon:<FaRegChartBar/>
        },
        {
            path:"/Signout",
            name:"Signout",
            icon:<FaSignOutAlt/>
        },
       
       

    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo"><img src = {logo} alt=''/><span>My Sundo</span></h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
               
          
           </div>
           
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;