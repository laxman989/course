import React from "react";

const CourseCard = ({ data }) => {
    return(
        <div className="m-4 shadow-slate-400 shadow-lg rounded-md">
            <div className="sm:w-[400px] w-[320px] h-[250px] object-cover">
                <img className="w-[100%] h-[100%] rounded-t-md" src={data.image} alt="img" />
            </div>
            <p className="text-black font-medium text-3xl mx-2 px-2 py-4">{data.name}</p>
            <div className="flex items-baseline justify-between mx-2 px-2 font-semibold text-md">
                <p className="text-black/70">{data.lectures} lectures, {data.duration} hrs</p>
                <p className="p-1 rounded-md text-purple-800 font-bold text-xl">{data.type}</p>
            </div>
            <div className="flex items-center justify-between border-t-[1px] border-black/50 mx-2 px-2 py-4">
                <p className="text-black font-semibold text-4xl">Rs. {data.price}</p>
                <button style={{letterSpacing: "1px"}} className="w-[150px] text-xl py-4 border border-black bg-black text-white hover:bg-white hover:text-black ease-in duration-150">Enroll</button>
            </div>
        </div>
    )
}

export default CourseCard;