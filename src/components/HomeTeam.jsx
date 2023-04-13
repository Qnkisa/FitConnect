import React from 'react'

export default function HomeTeam() {
  return (
    <section id="team">
      <div className="home-team">
        <div className="team-top">
          <div className="slide-number">
              <span>08</span>
              <div className="slide-number-line"></div>
              <p>07</p>
          </div>
          <p>Team</p>
        </div>
        <div className="team-grid">
          <div className="team-div">
            <img src="/person1.png" alt="" />
            <p>John Smith</p>
            <span>Founder and CEO</span>
          </div>
          <div className="team-div">
            <img src="/person2.png" alt="" />
            <p>Michael Owen</p>
            <span>Chief Operations Officer</span>
          </div>
          <div className="team-div">
            <img src="/person3.png" alt="" />
            <p>David Nguyen</p>
            <span>Chief Technology Officer</span>
          </div>
          <div className="team-div">
            <img src="/person4.png" alt="" />
            <p>James Thompson</p>
            <span>Chief Marketing Officer</span>
          </div>
          <div className="team-div">
            <img src="/person5.png" alt="" />
            <p>Eric Johnson</p>
            <span>Head of Partnerships</span>
          </div>
          <div className="team-div">
            <img src="/person6.png" alt="" />
            <p>Daniel Jackson</p>
            <span>Head of Customer Experience</span>
          </div>
        </div>
      </div>
    </section>
  )
}
