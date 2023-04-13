import React,{useState} from 'react'

export default function HomeFAQ() {
    const [firstFaq,setFirstFaq] = useState(false);
    const [secondFaq,setSecondFaq] = useState(false);
    const [thirdFaq,setThirdFaq] = useState(false);
    const [fourthFaq,setFourthFaq] = useState(false);
    const [fifthFaq,setFifthFaq] = useState(false);

    function handleFirstFaq(){
        setFirstFaq(prevValue => !prevValue)
    }

    function handleSecondFaq(){
        setSecondFaq(prevValue => !prevValue)
    }

    function handleThirdFaq(){
        setThirdFaq(prevValue => !prevValue)
    }

    function handleFourthFaq(){
        setFourthFaq(prevValue => !prevValue)
    }

    function handleFifthFaq(){
        setFifthFaq(prevValue => !prevValue)
    }


  return (
    <section id="faq">
        <div className="home-faq">
            <div className="home-faq-questions">
                <div className={firstFaq ? "faq-div faq-answer-show" : "faq-div"}>
                    <div className="faq-div-top" onClick={handleFirstFaq}>
                        <p>What is FitConnect (FCT)?</p>
                        <div className={firstFaq ? "faq-div-arrow arrow-flip" : "faq-div-arrow"}>
                            <ion-icon name="chevron-down-outline"></ion-icon>
                        </div>
                    </div>
                    <div className="faq-div-answer">
                        <p>FCT is a blockchain-based token for fitness transactions, including workout plans, gym memberships, and gym supplements.</p>
                    </div>
                </div>
                <div className={secondFaq ? "faq-div faq-answer-show" : "faq-div"}>
                    <div className="faq-div-top" onClick={handleSecondFaq}>
                        <p>How can I use FCT for fitness transactions?</p>
                        <div className={secondFaq ? "faq-div-arrow arrow-flip" : "faq-div-arrow"}>
                            <ion-icon name="chevron-down-outline"></ion-icon>
                        </div>
                    </div>
                    <div className="faq-div-answer">
                        <p>Purchase FCT tokens, transfer to your wallet, and use them for seamless and secure fitness transactions on partner platforms.</p>
                    </div>
                </div>
                <div className={thirdFaq ? "faq-div faq-answer-show" : "faq-div"}>
                    <div className="faq-div-top" onClick={handleThirdFaq}>
                        <p>What are the benefits of using FCT for fitness transactions?</p>
                        <div className={thirdFaq ? "faq-div-arrow arrow-flip" : "faq-div-arrow"}>
                            <ion-icon name="chevron-down-outline"></ion-icon>
                        </div>
                    </div>
                    <div className="faq-div-answer">
                        <p>Fast, secure, and low-cost transactions on the blockchain, compatibility with popular fitness platforms, and decentralized and transparent transactions.</p>
                    </div>
                </div>
                <div className={fourthFaq ? "faq-div faq-answer-show" : "faq-div"}>
                    <div className="faq-div-top" onClick={handleFourthFaq}>
                        <p>Can I earn rewards or discounts with FCT?</p>
                        <div className={fourthFaq ? "faq-div-arrow arrow-flip" : "faq-div-arrow"}>
                            <ion-icon name="chevron-down-outline"></ion-icon>
                        </div>
                    </div>
                    <div className="faq-div-answer">
                        <p> Yes, unlock exclusive benefits such as workout plans, gym membership discounts, and special deals on gym supplements as part of the FCT ecosystem.</p>
                    </div>
                </div>
                <div className={fifthFaq ? "faq-div faq-answer-show" : "faq-div"}>
                    <div className="faq-div-top" onClick={handleFifthFaq}>
                        <p>Is my personal information secure when using FCT?</p>
                        <div className={fifthFaq ? "faq-div-arrow arrow-flip" : "faq-div-arrow"}>
                            <ion-icon name="chevron-down-outline"></ion-icon>
                        </div>
                    </div>
                    <div className="faq-div-answer">
                        <p>Yes, FCT transactions are secured through blockchain technology, ensuring privacy and security.</p>
                    </div>
                </div>
            </div>
            <div className="home-faq-heading">      
                <h5>FAQ</h5>    
                <div className="slide-number">
                    <span>08</span>
                    <div className="slide-number-line"></div>
                    <p>05</p>
                </div>
            </div>
        </div>
    </section>
  )
}
