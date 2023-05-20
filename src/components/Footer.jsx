import React,{useState,useEffect} from 'react'

export default function Footer() {

    const handleAboutClick2 = () => {
        window.scrollTo({
          bottom: document.getElementById('about').offsetTop,
          behavior: 'smooth'
        });
      };
    
      const handleFaqClick2 = () => {
        window.scrollTo({
          top: document.getElementById('faq').offsetTop,
          behavior: 'smooth'
        });
      };
    
      const handleTeamClick2 = () => {
        window.scrollTo({
          top: document.getElementById('team').offsetTop,
          behavior: 'smooth'
        });
      };

  return (
    <footer>
        <div className="footer-div">
            <div className="nav-logo">
                <img src="/fitconnect-real-logo.png" alt="" />
                <p>FitConnect</p>
            </div>
        </div>
        <div className="footer-div">
            <p>Contact</p>
            <a href="mailto:ftc@gmail.com" target='_blank'>ftc@gmail.com</a>
            <div className="footer-socials">
                <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
                <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
                <a href="#"><ion-icon name="logo-pinterest"></ion-icon></a>
                <a href="#"><ion-icon name="logo-linkedin"></ion-icon></a>
            </div>
            <div className="footer-div-rights">
                <p>@FTC 2023</p>
                <span>All rights reserved.</span>
                <p>by <a href="https://github.com/Qnkisa" target='_blank'>Yanislav Angelov</a></p>
            </div>
        </div>
    </footer>
  )
}
