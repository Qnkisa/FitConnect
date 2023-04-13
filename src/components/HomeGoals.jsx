import React,{useRef,useEffect} from 'react'
import {Link} from "react-router-dom"

export default function HomeGoals() {
    
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
    <section id='about'>
        <div className="home-goals">
            <div className="home-goals-helper">
                <div className="home-goals-main">
                    <div className="home-goals-main-top">
                        <h2>What problems does <span>FitConnect</span> solve?</h2>
                        <p>goals</p>
                    </div>
                    <p>Empowering fitness enthusiasts with Blockchain solutions.</p>
                    <div className="home-goals-grid" ref={observedElementRef1}>
                        <div className="home-goals-div">
                            <div className="home-goals-line"></div>
                            <p>FitConnect provides a decentralized way for fitness enthusiasts to access and purchase workout plans, gym memberships, and gym supplements using FCT tokens, regardless of location or access to traditional payment methods.</p>
                        </div>
                        <div className="home-goals-div">
                            <div className="home-goals-line"></div>
                            <p>FitConnect utilizes blockchain technology to create transparent and secure fitness transactions, ensuring trust and confidence among users with auditable records and data security.</p>
                        </div>
                        <div className="home-goals-div">
                            <div className="home-goals-line"></div>
                            <p>FitConnect eliminates high transaction costs and delays by leveraging blockchain for fast and low-cost transactions.</p>
                        </div>
                    </div>
                </div>
                <div className="slide-number">
                    <span>08</span>
                    <div className="slide-number-line"></div>
                    <p>02</p>
                </div>
            </div>
        </div>
    </section>
  )
}
