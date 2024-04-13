import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from "react-scroll"; 

const Home = () => {
    return(
        <div
            name="home"
            id="home"
            className='h-screen w-full bg-[#0a192f]'
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className='flex flex-col justify-center h-full'>
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">
                        Hey! Im a full stack developer!
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        I have 3 years of experience within various areas of the Software Development world! Ranging from Solidity and
                         Block Chain technologies to Relational Database Management and Cloud Computing, I am interested in how I can 
                         use my passion of problem solving to advance my skillset and impact in what I do. 
                    </p>
                    <div>
                        <Link
                            to='about'
                            smooth
                            duration={300}
                            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                        >About Me
                        <span className="group-hover:rotate-90 duration-300">
                            <HiArrowNarrowRight size={25} className="ml-3" />
                        </span>
                        </Link>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default Home;