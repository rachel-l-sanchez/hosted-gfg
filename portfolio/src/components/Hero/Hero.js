import React from "react";
import SideImg from "./SideImg";
import '../static/style.css';
export default function Hero() {
  
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('RachelSanchezresume.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'RachelSanchezresume.pdf';
            alink.click();
        })
    })
  }
  
  return (
    
    <div className="hero-container flex flex-row justify-center items-start overflow-hidden">
       <section className="bgimage" id="home">
  
        <div className="container-fluid">
        <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
          <h2 className="hero_title">Hi, it's me Rachel</h2>

          <strong>A Fullstack Developer</strong>
          <p className="hero_desc">I am originally from Irvine, CA. I started coding a couple years ago. I see coding as a creative outlet and having the ability to work through the development 
            lifecycle is motivating for me. I've enjoyed every step of my coding journey.
          </p>
          <p className="hero_desc">My vision is to grow as a developer, constantly learning new things and contribute to coding for social good projects in my free time.</p>
          <button onClick={onButtonClick} download>Download Resume</button>
      </div>
    </div>
    </div>
      </section>
    <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
      <SideImg/>
        </div>
    {/* Image container */}
    <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
      <div className="w-3/4 ">
        <div className="flex flex-row justify-between mt-4">
          <div className="flex flex-row space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-90deg-up"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
              />
            </svg>
            <p className="font-mono ">That's me</p>
          </div>
          <div className="hero-card-container">
          </div>
        </div>
      </div>
    </div>
    <div>
    </div>
  </div>
);
}