import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

// Need to remove side margin for the first navLink element (margin left)
// Need to remove side margin for the last navLink element (margin right)
// Active link needs to be done (for active section)
// Scroll down to specific area needs to be done.
// Dropdown on shop needs to be done


const CustomLink = ({ to, children,active, ...props}) => {
  return(
    <li className="mx-6 font-hv">
      <NavLink 
        to={to} 
        className={`text-black transition-all duration-100
        ${active ? 
          'px-4 py-1 mr-[-10px] bg-gradient-to-r from-[#e4eeff] to-[#f1e8ec] rounded-full border-[1.5px] border-black hover:text-black'
          :
          'hover:text-[#797979]'
        }`}
        {...props}
        // onClick={()=>{active=!active}}
      >
        {children}
      </NavLink>
    </li>
  )
}

function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-gradient-to-r from-[#e1e1d3] to-[#f4fdf1] fixed top-0 left-0 h-16 w-screen border-b-[1.5px] border-[#bdbdbd] text-black z-10">
      {/*Desktop NavBar*/}
      <nav className="hidden md:flex flex-col justify-center h-16 w-full text-black">
        <div className="mx-5 flex flex-row justify-between items-center ">
          <div className="text">
            <NavLink to="/">
              <h1 className="text-black text-3xl">PHEOBE PALMER</h1>
            </NavLink>
          </div>
          <div className="nav_links">
            <ul className="flex">
              <CustomLink to="/" active={true} >
                HOME
              </CustomLink>
              <CustomLink to="/shop">
                SHOP
              </CustomLink>
              <CustomLink to="#lookbook">
                LOOKBOOK
              </CustomLink>
              <CustomLink to="#contact">
                CONTACT
              </CustomLink>
            </ul>
          </div>
        </div>
      </nav>
      
      {/*Mobile NavBar*/}
      <nav className=" h-fit w-full text-black md:hidden flex flex-col static">
        <div className="flex flex-row justify-between items-center mx-5">
          <div className="mobile_logo">
            <h1 className="font-bold">PP</h1>
          </div>
          <div onClick={()=>setOpen(!open)} className="menu_bar">
            {
              open ? 
              <FaBars className="text-3xl cursor-pointer"/> 
              : 
              <h1 className="text-5xl cursor-pointer">x</h1>
            }
          </div>
        </div>
        <div className={`mobile-nav-links bg-gradient-to-r from-[#e1e1d3] to-[#f4fdf1] mt-2 w-screen ${open ? 'h-0':'h-screen'} transition-all duration-200 ease-in-out `}>
            <div className={`flex flex-col w-screen ${open ? 'hidden':'flex'} text-7xl trasnition-all duration-500 ease-in-out`}>
              <ul className={`flex flex-col w-screen space-y-4 `}>
                <CustomLink to="/"  >
                  Home
                </CustomLink>
                <CustomLink to="#shop">
                  Shop
                </CustomLink>
                <CustomLink to="#lookbook">
                  Lookbook
                </CustomLink>
                <CustomLink to="#contact">
                  Contact
                </CustomLink>
              </ul>
              </div>
          </div>
      </nav>
    </header>
  )
  // open = false;
}

export default NavBar