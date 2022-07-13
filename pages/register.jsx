import React from "react";
import Link from "next/link";

const Register = () => {
    return(
        <div className="flex items-center justify-center h-screen w-screen">
            <div className="shadow-md shadow-gray-300 px-4 py-8">
                <h1 className="text-black w-[320px] sm:w-[420px] text-4xl mx-4 font-semibold">Create Account</h1>
                <input className="block w-[90%] text-lg outline-none bg-gray-100 h-16 rounded-md p-4 m-4" type="text" placeholder="Name" />
                <input className="block w-[90%] text-lg outline-none bg-gray-100 h-16 rounded-md p-4 m-4" type="email" placeholder="Email" />
                <input className="block w-[90%] text-lg outline-none bg-gray-100 h-16 rounded-md p-4 m-4" type="password" placeholder="Password" />
                <input className="block w-[90%] text-lg outline-none bg-gray-100 h-16 rounded-md p-4 m-4" type="password" placeholder="Confirm Password" />
                <button style={{letterSpacing: "1px"}} className="block w-[50%] m-auto text-xl py-4 mt-8 border border-black bg-black text-white hover:bg-white hover:text-black ease-in duration-150">Create account</button>

                <Link href="/register">
                    <p className="text-xl text-center mt-4">Don&apos;t have an account? <span className="text-blue-700 cursor-pointer">login</span></p>
                </Link>
                
            </div>
        </div>
    )
}

export default Register;
