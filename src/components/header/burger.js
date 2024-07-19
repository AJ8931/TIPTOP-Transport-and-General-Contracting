import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from "../../assets/images/TIPTOP-RIGINAL.png"
import "./burger.css"


const Burger = () => {
    const mRef = useRef();
    const linkClass = 'cursor-pointer link-underlined py-4 w-fit h-14';
    const [check, setCheck] = useState(false);
    const mobile_menu = document.querySelector('.mobile-nav');
    const background = document.querySelector('.background_blur')
    function Toggling() {
        mRef.current.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
        background.classList.toggle('is-active');
        if (mRef.current.classList.contains('is-active') && background.classList.contains('is-active') && mobile_menu.classList.contains('is-active')) {
            setCheck(true)
        }
    }

    useEffect(() => {
        if (check) {
            mobile_menu.onclick = function () {
                mRef.current.classList.toggle('is-active');
                mobile_menu.classList.toggle('is-active');
                background.classList.toggle('is-active');
                setCheck(false)
            };
            background.onclick = function () {
                mRef.current.classList.toggle('is-active');
                mobile_menu.classList.toggle('is-active');
                background.classList.toggle('is-active');
                setCheck(false)
            };
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [check])
    return (
        <>

            <nav className='bg-white flex flex-row justify-between px-10 items-center text-Green text-xl py-2 shift  sticky top-0 w-full indexing'>
                <div className='w-16 py-1'>
                    <Link to="/" className='w-full cursor-pointer'>
                        <img className='w-full' src={Logo} alt='Logo' />
                    </Link>
                </div>
                <button id='hamburger1' className="hamburger" ref={mRef} onClick={Toggling}>
                    <div className="bar"></div>
                </button>
            </nav>
            <div className="background_blur bg-white opacity-40"></div>
            <div className="mobile-nav bg-white opacity-90">
                <div className='flex flex-col justify-center items-center w-full text-lg max-[1708px]:text-sm gap-[40px] font-semibold'>
                    <ul className='text-center text-Green text-xl flex flex-col justify-center items-center'>
                        <li className={linkClass} >
                            <Link to="/" href="#">
                                Home
                            </Link>
                        </li>
                        <li className={linkClass} >
                            <Link to="/Profile" href="#">
                                Profile
                            </Link>
                        </li>
                        <li className={linkClass} >
                            <Link to="/Team" href="#">
                                Team
                            </Link>
                        </li>
                        <li className={linkClass} >
                            <Link to="/Project" href="#">
                                Project
                            </Link>
                        </li>
                        <li className={linkClass} >
                            <Link to="/Careers" href="#">
                                Career
                            </Link>
                        </li>
                        <li className={linkClass} >
                            <Link to="/Services" href="#">
                                Services
                            </Link>
                        </li>
                        <li className={linkClass} >
                            <Link to="/ContactUs" href="#">
                                Contact
                            </Link>
                        </li>

                        <li className='cursor-pointer flex flex-row justify-center items-center pt-10 pb-4 h-14 w-44' >
                            <Link to="/" className='bg-white w-full font-semibold rounded-lg text-center transition-all ease-in duration-200 border-4 hover:scale-110  border-Green h-10'>
                                Register
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Burger