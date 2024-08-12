'use client';

import { useState } from 'react';
import './Header.css'
import { usePathname } from 'next/navigation'


export default function Header() {
    const pathname = usePathname();
    var [currentPage, setCurrentPage] = useState(pathname);
    if (currentPage === "/") {
        setCurrentPage("home");
    } else if (currentPage === "/about") {
        setCurrentPage("about");
    } else if (currentPage === "/projects") {
        setCurrentPage("projects");
    } else if (currentPage === "/contact") {
        setCurrentPage("contact");
    };

    var [smolMenuVisibility, setSmolMenuVisibility] = useState("hidden");
    var [smolMenuIconVisibility, setSmolMenuIconVisibility] = useState("inline");
    function handleSmolMenuVisibility() {
        if (smolMenuVisibility === "hidden") {
            setSmolMenuVisibility("inline");
            setSmolMenuIconVisibility("hidden");
        } else {
            setSmolMenuVisibility("hidden");
            setSmolMenuIconVisibility("inline")
        }
    }
    return (
        <nav className="bg-navbar w-full flex relative justify-between items-center mx-auto px-8 h-20">
            <div className="inline-flex justify-center">
                <a className="_o6689fn align-middle text-center text-xl sm:text-2xl" href="/home">
                    <h1 className='font-bold title-animation'>
                        Ayush Chandan
                    </h1>
                </a>
            </div>
            <div className='hidden sm:inline font-semibold text-lg text-black'>
                <ul className="flex justify-right">
                    <li className="mx-3">
                        <a href="/" className="text-black hover:text-yellow-800">
                            Home
                        </a>
                    </li>
                    <li className="mx-3">
                        <a href="/contact" className="text-black hover:text-yellow-800">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
            <div className={smolMenuIconVisibility + " sm:hidden"}>
                {/*This is the mobile menu button, make a menu button*/}
                <img src="./images/collapse.png" alt="menu" width={30} height={30} onClick={handleSmolMenuVisibility} />
            </div>
            {/*This is the mobile menu, make a menu*/}
            <div className={smolMenuVisibility.toString()}>
                <ul className="flex justify-center">
                    <li className="mx-0.5 my-2">
                        <a href="/home" className=" text-black hover:text-yellow-800">
                            Home
                        </a>
                    </li>
                    <li className="mx-0.5 my-2">
                        <a href="/contact" className="text-black hover:text-yellow-800">
                            Contact
                        </a>
                    </li>
                    <li className="mx-0.5 my-1.5" onClick={handleSmolMenuVisibility} >
                        {/*This is the close button*/}
                        <div>
                            <img src="./images/close-window.png" alt="close" width={30} height={30} />
                        </div>

                    </li>
                </ul>
            </div>
        </nav >
    )
}