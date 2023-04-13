import React,{useEffect,useRef} from 'react'
import {Link} from "react-router-dom"

export default function HomePartners() {

    useEffect(() => {
        const handleScroll = () => {
          const firstContainer = document.querySelector('.home-partners-div-first');
          const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
          const maxScrollLeft = firstContainer.scrollWidth - firstContainer.clientWidth;
          const scrollLeft = maxScrollLeft * scrollPercentage;
          firstContainer.scrollLeft = scrollLeft;
    
          const secondContainer = document.querySelector('.home-partners-div-second');
          const secondScrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
          const secondMaxScrollLeft = secondContainer.scrollWidth - secondContainer.clientWidth;
          const secondScrollLeft = secondMaxScrollLeft * (1 - secondScrollPercentage); // Update calculation
          secondContainer.scrollLeft = secondScrollLeft;
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    

  return (
    <div className="home-partners">
        <div className="home-partners-top">
            <h3>Our Partners</h3>
            <div className="slide-number">
                <span>08</span>
                <div className="slide-number-line"></div>
                <p>03</p>
            </div>
        </div>
        <div className="home-partners-div home-partners-div-first" style={{ overflowX: 'hidden', width: '100%'}}>
            <img src="/nike-logo.png" alt="" />
            <img src="/under-armour-logo.png" alt="" />
            <img src="/my-protein-logo.png" alt="" />
            <img src="/nike-logo.png" alt="" />
            <img src="/under-armour-logo.png" alt="" />
            <img src="/my-protein-logo.png" alt="" />
            <img src="/nike-logo.png" alt="" />
            <img src="/under-armour-logo.png" alt="" />
            <img src="/my-protein-logo.png" alt="" />
        </div>
        <div className="home-partners-div home-partners-div-second" style={{ overflowX: 'hidden', width: '100%'}}>
            <img src="/gymshark-logo.png" alt="" />
            <img src="/reebok-logo.png" alt="" />
            <img src="/optimum-nutrition-logo.png" alt="" />
            <img src="/gymshark-logo.png" alt="" />
            <img src="/reebok-logo.png" alt="" />
            <img src="/optimum-nutrition-logo.png" alt="" />
            <img src="/gymshark-logo.png" alt="" />
            <img src="/reebok-logo.png" alt="" />
            <img src="/optimum-nutrition-logo.png" alt="" />
        </div>
    </div>
  )
}
