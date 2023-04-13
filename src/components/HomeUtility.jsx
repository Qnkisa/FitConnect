import React,{useRef,useEffect} from 'react'
import {Link} from "react-router-dom"

export default function HomeUtility() {
    const observedElementRef1 = useRef();

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
    
        if (observedElementRef1.current) {
            observer.observe(observedElementRef1.current);
        }
    
        return () => {
            if (observedElementRef1.current) {
                observer.unobserve(observedElementRef1.current);
            }
        };
    }, []);


  return (
    <div className="home-utility">
        <div className="slide-number">
            <span>08</span>
            <div className="slide-number-line"></div>
            <p>04</p>
        </div>
        <div className="home-utility-helper">
            <div className="home-utility-top">
                <h4>Token <span>Utility</span> </h4>
                <div className="utility-logo">
                    <img src="/website-logo.png" alt="" />
                </div>
            </div>
            <div className="home-utility-text" ref={observedElementRef1}>
                <div className="home-utility-text-div">
                    <div className="utility-icon">
                        <ion-icon name="fitness-outline"></ion-icon>
                    </div>
                    <p>FCT is not just a token, it's your key to unlocking a world of fitness possibilities. Use FCT to purchase workout plans from top fitness trainers, pay for gym memberships at participating fitness centers, and buy high-quality gym supplements from trusted suppliers. </p>
                </div>
                <div className="home-utility-text-div">
                    <div className="utility-icon">
                        <ion-icon name="card-outline"></ion-icon>
                    </div>
                    <p>Say goodbye to traditional payment methods and embrace the convenience, security, and benefits of using FCT for all your fitness needs.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
