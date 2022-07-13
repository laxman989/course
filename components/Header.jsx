import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {

    const [nav, setNav] = useState(false);
    const [bgColor, setBgColor] = useState("transparent");
    const [textColor, setTextColor] = useState("white");

    const handleNav = () => {
        setNav(!nav);
    }

    useEffect(() => {
        const changeColor = () => {
            if(window.scrollY > 90) {
                setBgColor("white");
                setTextColor("black");
            }
            else {
                setBgColor("transparent");
                setTextColor("white");
            }
        };
        window.addEventListener("scroll", changeColor);
    }, [])

    return(
        <div style={{backgroundColor: `${bgColor}`}} className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
            <div className={`max-w-[1240px] m-auto flex justify-between items-center p-4 text-${textColor}`}>
                <Link href='/'>
                    <h2 className="font-bold text-4xl uppercase">Course</h2>
                </Link>
                <ul className="hidden sm:flex ">
                    <li style={{color: `${textColor}`}} className="px-4 text-xl hover:text-gray-200">
                        <Link href='/'>Home</Link>
                    </li>
                    <li style={{color: `${textColor}`}} className="px-4 text-xl hover:text-gray-200">
                        <Link href='#courses' scroll={false}>Courses</Link>
                    </li>
                    <li style={{color: `${textColor}`}} className="px-4 text-xl hover:text-gray-200">
                        <Link href='/login'>Login</Link>
                    </li>
                    <li style={{color: `${textColor}`}} className="px-4 text-xl hover:text-gray-200">
                        <Link href='/register'>Register</Link>
                    </li>
                </ul>

                {/* for mobile screen */}
                <div className="block sm:hidden z-10" onClick={handleNav}>
                    {nav ? <AiOutlineClose size={20} style={{color: "black"}} /> : <AiOutlineMenu size={20} style={{color: `${textColor}`}} />}
                </div>
                <div className={
                    nav ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center w-full h-screen text-center ease-in duration-300 bg-white" : "sm:hidden absolute top-0 right-[-100%] left-[100%] bottom-0 flex items-center justify-center w-full h-screen text-center ease-in duration-300 bg-white"
                }>
                    <ul>
                        <li onClick={handleNav} className="my-5 px-4 text-2xl text-black hover:text-gray-500">
                            <Link href='/'>Home</Link>
                        </li>
                        <li onClick={handleNav} className="my-5 px-4 text-2xl text-black hover:text-gray-500">
                            <Link href='#courses'>Courses</Link>
                        </li>
                        <li onClick={handleNav} className="my-5 px-4 text-2xl text-black hover:text-gray-500">
                            <Link href='/login'>Login</Link>
                        </li>
                        <li onClick={handleNav} className="my-5 px-4 text-2xl text-black hover:text-gray-500">
                            <Link href='/register'>Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;