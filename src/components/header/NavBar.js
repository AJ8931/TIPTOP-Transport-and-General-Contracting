import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/images/TIPTOP-RIGINAL.png"
import Burger from './burger'
import './navbar.css'


const NavBar = () => {
    const [Toggle, setToggle] = useState()
    "load resize".split(" ").forEach(function (e) {
        window.addEventListener(e, () => {
            if (window.innerWidth < 1055) {
                setToggle(false);
            } else {
                setToggle(true);
            }
        })
    });

    return (
        <>
            {Toggle
                ?
                <>
                    <nav className='shadow-xl bg-white  flex flex-row justify-between px-14 items-center text-Green text-2xl py-0 sticky top-0 w-full z-50 transition-all duration-100 ease-in-out'>
                        <div className='w-24 py-5 min-w-[60px]'>
                            <Link to="/" className='w-full cursor-pointer'>
                                <img className='w-full' src={Logo} alt='Logo' />
                            </Link>
                        </div>
                        <ul className='flex flex-row justify-between w-3/6 items-center text-lg max-[1708px]:text-sm gap-[40px] min-w-[580px] font-bold'>
                            <Link to="/">
                                <li className='cursor-pointer link link-underline link-underline-black py-1' >
                                    Home
                                </li>
                            </Link>
                            <Link to="/Profile">
                                <li className='cursor-pointer link link-underline link-underline-black py-1' >
                                    Profile
                                </li>
                            </Link>
                            <Link to="/Team">
                                <li className='cursor-pointer link link-underline link-underline-black py-1' >
                                    Team
                                </li>
                            </Link>
                            <Link to="/Project">
                                <li className='cursor-pointer link link-underline link-underline-black py-1' >
                                    Project
                                </li>
                            </Link>
                            <Link to="/Careers">
                                <li className='cursor-pointer link link-underline link-underline-black py-1' >
                                    Career
                                </li>
                            </Link>
                            <Link to="/Services">
                                <li className='cursor-pointer link link-underline link-underline-black py-1' >
                                    Services
                                </li>
                            </Link>
                            <Link to="/ContactUs">
                                <li className='cursor-pointer link link-underline link-underline-black py-1' >
                                    Contact
                                </li>
                            </Link>
                        </ul>
                        <div className='w-40 max-[1708px]:w-36 min-w-[200px] flex flex-row justify-between items-center py-1 gap-4'>
                            <button className=' w-full min-w-[80px] font-bold rounded-lg text-center py-[2px] text-xl transition-all ease-in duration-200 border-4 hover:scale-110  bg-white border-solid border-Dark_Green max-[1708px]:text-sm min-[1708px]:py-[4px]' onClick={(e)=>{window.location.href=`mailto:hr@tiptoptransp.com`}}>Email</button>
                            <button className=' w-full min-w-[80px] font-bold rounded-lg text-center py-[2px] text-xl transition-all ease-in duration-200 border-4 hover:scale-110  bg-white border-solid border-Dark_Green max-[1708px]:text-sm min-[1708px]:py-[4px]' onClick={()=>{window.open("tel:02 246 0722")}}>Phone</button>
                        </div>
                        <div className=' text-right px-4 text-Green text-sm absolute right-0 bottom-0'>
                            <span className='font-semibold'>Email:</span> hr@tiptoptransp.com
                            <span className='mr-10'></span>
                            <span className='font-semibold'>Phone:</span> 02 246 0722
                        </div>
                    </nav>
                </>
                :
                <Burger />

            }
        </>
    )
}

export default NavBar