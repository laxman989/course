import React from "react";
import Link from "next/dist/client/link";
import coursesData from "../data/coursesData";
import CourseCard from "../components/CourseCard";

const HomePage = () => {
    return(
        <>
        <div className="flex items-center justify-center h-screen w-screen bg-fixed bg-center bg-cover bg-no-repeat home-img">
            <div className="absolute top-0 left-0 h-screen w-screen bg-black/70 z-[2]">
            </div>

            <div className="text-white p-5 z-[2]">
                <h1 className="text-6xl font-bold">Courses with certification</h1>
                <p className="text-2xl font-light mt-2 mb-8">Learn new things with advance courses</p>
                
                    <Link href="#courses">
                        <button className="text-xl py-4 px-8 border hover:bg-white/20 ease-in duration-150">Explore courses</button>
                    </Link>
            </div>
            
        </div>

        <div id="courses" className="mt-20 mb-6">
            <h1 className="text-center text-2xl font-bold mb-4">Our Premium Courses</h1>
            <div className="mx-20 flex items-center justify-center flex-wrap">
                {
                    coursesData.map(course => {
                        return <CourseCard key={course.id} data={course} /> 
                    })
                }
            </div>
        </div>
        </>
    )
}

export default HomePage;