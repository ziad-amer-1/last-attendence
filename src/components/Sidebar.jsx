import React, { useState,useContext } from 'react';
import {FaBars,FaCog,FaQrcode,FaAddressCard,FaListAlt,FaSignOutAlt,FaRegCheckCircle}from "react-icons/fa";
import { NavLink ,useNavigate} from 'react-router-dom';
import { loginContext } from '../App';

const Sidebar = ({children}) => {
    const loginLogout = useContext(loginContext);

    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
                    {path:"/filter",name:"FilterAttendance",icon:<FaListAlt/>},
                    {path:"/generate", name:"Generate",icon:<FaQrcode/>},
                    {path:"/", name:"ControlPanel", icon:<FaCog/>},
                    {path:"/students", name:"Students", icon:<FaAddressCard/>},
                    {path:"/login",name:"Logout",icon:<FaSignOutAlt/>}]

    const navigate =useNavigate();

    const checklog = (i) => {
        if (i.name === "Logout"){
            loginLogout(false);
            navigate("/login");
        }
    }
    return (
        <loginLogout>
            <div className='d-flex'>
                <div style={{width: isOpen ? "270px" : "70px"}} className="sidebar">
                    <div className="top_section">
                        <h1 style={{display: isOpen ? "block" : "none"}} className="logo">ONTIME</h1>
                        <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                            <FaBars onClick={toggle}/>
                        </div>
                    </div>
                    {menuItem.map((item, index)=>(
                            <NavLink to={item.path} key={index} className="link" activeclassName="active">
                                <div onClick={()=>checklog(item)} className="icon">{item.icon}</div>
                                <div onClick={()=>checklog(item)} style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                            </NavLink>))}
                </div>
                <main>{children}</main>
            </div>
        </loginLogout>
    );
};

export default Sidebar;