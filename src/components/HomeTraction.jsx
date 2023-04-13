import React,{useRef,useEffect} from 'react'

export default function HomeTraction() {

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
    <div className="home-traction">
        <h6>Traction</h6>
        <div className="traction-flex">    
            <div className="slide-number">
                <span>08</span>
                <div className="slide-number-line"></div>
                <p>06</p>
            </div>
            <div className="traction-grid" ref={observedElementRef}>
                <div className="traction-div">
                    <p>70 000+</p>
                    <span>people joined</span>
                </div>
                <div className="traction-div">
                    <p>13 000</p>
                    <span>creators</span>
                </div>
                <div className="traction-div">
                    <p>22 000</p>
                    <span>donators</span>
                </div>
                <div className="traction-div">
                    <p>$4 000 000</p>
                    <span>funds raised</span>
                </div>
            </div>
        </div>
    </div>
  )
}
