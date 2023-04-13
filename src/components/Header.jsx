import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"

export default function Header({scrollToAbout}) {
    
    const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollpos]);
  
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollpos > currentScrollPos;
      setPrevScrollpos(currentScrollPos);
      setVisible(visible);
    };


    
  const handleAboutClick = () => {
    window.scrollTo({
      top: document.getElementById('about').offsetTop,
      behavior: 'smooth'
    });
  };

  const handleFaqClick = () => {
    window.scrollTo({
      top: document.getElementById('faq').offsetTop,
      behavior: 'smooth'
    });
  };

  const handleTeamClick = () => {
    window.scrollTo({
      top: document.getElementById('team').offsetTop,
      behavior: 'smooth'
    });
  };

  return (
    <header className={visible ? "header-visible" : "header-hidden"}>
        <nav>
            <div className="nav-logo">
                <img src="/website-logo.png" alt="" />
                <p>FitConnect</p>
            </div>
            <ul className='menu'>
                <li>
                    <a href="#" onClick={handleAboutClick}>About</a>
                </li>
                <li>
                    <a href="#" onClick={handleFaqClick}>FAQ</a>
                </li>
                <li>
                    <a href="#" onClick={handleTeamClick}>Team</a>
                </li>
            </ul>
            <div className="website-cta nav-cta">
                <a href="https://forms.gle/rRFcnrGdocq7sVwD6" target='_blank'>Join The Waitlist</a>
            </div>
        </nav>
    </header>
  )
}
