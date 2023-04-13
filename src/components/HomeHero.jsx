import React,{ useRef, useEffect } from 'react'
import {Link} from "react-router-dom"

export default function HomeHero() {
    
    const observedElementRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    }else{
                        entry.target.classList.remove("active")
                    }
                });
            }, 
            {
            }
        );
    
        if (observedElementRef.current) {
            observer.observe(observedElementRef.current);
        }
    
        return () => {
            if (observedElementRef.current) {
                observer.unobserve(observedElementRef.current);
            }
        };
    }, []);

  return (
    <div className="home-hero">
        <div className="home-hero-helper">
            <div className="slide-number">
                <span>08</span>
                <div className="slide-number-line"></div>
                <p>01</p>
            </div>
            <div className="home-hero-content" ref={observedElementRef}>
                <h1>Join wait-list <br /> <span>ido july 2023</span></h1>
                <p>At <span>FitConnect</span> , we empower fitness enthusiasts with cutting-edge solutions. We recognize the unique challenges faced by individuals passionate about fitness, and we deliver solutions through our blockchain-based token, <span>FCT</span> .</p>
                <div className="website-cta home-hero-cta">
                    <a href="https://forms.gle/rRFcnrGdocq7sVwD6" target='_blank'>Join The Waitlist</a>
                </div>
            </div>
        </div>
    </div>
  )
}
