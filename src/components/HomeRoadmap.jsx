import React,{useRef,useEffect} from 'react'

export default function HomeRoadmap() {

    
    
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
                threshold:1
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
    <div className="home-roadmap">
        <div className="roadmap-top">
            <div className="roadmap-top-flex">
                <p>Roadmap</p>
                <div className="slide-number">
                    <span>08</span>
                    <div className="slide-number-line"></div>
                    <p>08</p>
                </div>
            </div>
            <p className='roadmap-year' ref={observedElementRef}>2023</p>
        </div>
        <div className="roadmap-grid">
            <div className="roadmap-div">
                <div className="roadmap-div-dot"></div>
                <div className="roadmap-div-text">
                    <div className="we-are-here"><div className="we-are-here-line"></div> <div>We Are Here</div> </div>
                    <span>Q1 2023</span>
                    <p>Seed Funding</p>
                    <p>Initial Development</p>
                </div>
            </div>
            <div className="roadmap-div">
                <div className="roadmap-div-dot"></div>
                <div className="roadmap-div-text">
                    <span>Q3 2023</span>
                    <p>ICO Launch</p>
                </div>
            </div>
            <div className="roadmap-div">
                <div className="roadmap-div-dot"></div>
                <div className="roadmap-div-text">
                    <span>Q4 2023</span>
                    <p>Platfoorm Beta Testing</p>
                </div>
            </div>
            <div className="roadmap-div">
                <div className="roadmap-div-dot"></div>
                <div className="roadmap-div-text">
                    <span>Q2 2024</span>
                    <p>Platform Public Launch</p>
                </div>
            </div>
            <div className="roadmap-div">
                <div className="roadmap-div-dot"></div>
                <div className="roadmap-div-text">
                    <span>Q4 2024</span>
                    <p>Platform Expansion</p>
                    <p>More Partherships</p>
                </div>
            </div>
        </div>
    </div>
  )
}
