import React from 'react'
import { useEffect, useState } from "react";
import binary from '../components/static/binary.jpg';
import { projects } from "../data";

export default function Projects() {
  return (
    <section className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500">
          Projects
        </h1>
      </div>
      {/* Grid starts here */}
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col' 
        style={{ backgroundImage: `url(${binary})` }}>
            
          {/* Single card */}
          {projects.map((project) => (
         
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt="portfolio"
                className="transform hover:scale-125 transition duration-2000 ease-out"
              />
              <span className=' text-lg font-bold text-white tracking-wider'>
                {project.title}
              </span>
              <p className='text-center'>{project.description}</p>
              <a href={project.link}>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Demo
                </button>
              </a>
              <a href={project.github}>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
                <a href="https://www.freepik.com/free-vector/stream-binary-code-design_13311414.htm#query=code&position=9&from_view=search&track=sph">Image by rawpixel.com</a> on Freepik
            </div>
          ))}
        </div>
      </div>
    </section>
);
}