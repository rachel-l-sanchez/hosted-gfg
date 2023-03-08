import React, { Component, useEffect, useState } from "react";
import chevron from '../static/circle-chevron-up-solid.svg';
import '../static/style.css';

const Footer = () => {
    const [showGoTop, setShowGoTop] = useState("");

    const handleVisibleButton = () => {
        setShowGoTop( window.pageYOffset > 50 )
    }

    const handleScrollUp = () => {
        window.scrollTo( { left: 0, top: 0, behavior: 'smooth' } )
    }

    useEffect(() => {
      window.addEventListener("scroll", handleVisibleButton);
    }, []);

     
   
    
return (
    <div id="page-container">
        <div id="footer" className={showGoTop} onClick={handleScrollUp}>
            <button type={'button'} className="goTop">
                    <img src={chevron} className="scrollTop" alt="scrollToTop" />
            </button>
            <a href="https://www.freepik.com/free-vector/female-designer-working-late-room-flat-illustration-cartoon-student-using-laptop-computer-night-sitting-desk_12290996.htm#query=woman%20on%20computer%20dark%20animated&position=4&from_view=search&track=ais">Image by pch.vector</a> on Freepik
        </div>
    </div>
     
  
    );

}
    
export default Footer;