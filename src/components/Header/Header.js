import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assest/download.png'
import './Header.css'

const Header = () => {
    return (
        <nav className="relative flex w-full flex-nowrap items-center justify-between bg-neutral-900 py-4 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 lg:flex-wrap lg:justify-start" data-te-navbar-ref>
            <div className="flex w-full container mx-auto flex-wrap items-center justify-between px-6">
                <button className="block border-0 bg-transparent py-2 px-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden" type="button" data-te-collapse-init data-te-target="#navbarSupportedContent3" aria-controls="navbarSupportedContent3" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="[&>svg]:w-7">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        </svg>
                    </span>
                </button>
                <div className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto" id="navbarSupportedContent3" data-te-collapse-item>
                    <a className="text-xl text-white" href="/">
                        NavBar
                    </a>
                    {/* Left links */}
                    <ul className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row" data-te-navbar-nav-ref>

                        <li className="lg:px-2" data-te-nav-item-ref>
                            <a className={`text-white font-semibold lg:px-2`} href>
                                <NavLink to='/home' className={({ isActive }) => isActive ? 'active' : undefined} aria-current="page" href="#" data-te-nav-link-ref>Home</NavLink>
                            </a>

                        </li>
                        <li className="lg:pr-2" data-te-nav-item-ref>
                            <a href="#" className='p-0 text-white font-semibold'>
                                <NavLink to='/about' data-te-nav-link-ref>About</NavLink>
                            </a>

                        </li>
                        <li className="lg:pr-2" data-te-nav-item-ref>
                            <a href="" className="p-0 text-white font-semibold">
                                <NavLink to='/foods' data-te-nav-link-ref>Foods</NavLink>
                            </a>
                        </li>
                        <li className="lg:pr-2" data-te-nav-item-ref>
                            <a href="" className="p-0 text-white font-semibold" >
                                <NavLink to='/contact' data-te-nav-link-ref>Contact</NavLink>
                            </a>

                        </li>
                        <li className="lg:pr-2" data-te-nav-item-ref>
                            <a href="" className="p-0 text-white font-semibold" >
                                <NavLink to='/services' data-te-nav-link-ref>Services</NavLink>
                            </a>

                        </li>

                    </ul>
                    {/* Left links */}
                </div>
                {/* Collapsible wrapper */}
            </div>
        </nav >

    );
};

export default Header;