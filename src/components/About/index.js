import React from 'react'
import coverImage from "../../assets/cover/Surf.jpg";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
        My name is Alvin. I have been working in the insurance industry for a little bit over a decade. I have recently started working on databases and creating reports based on analytics. I have always been a technology driven person and have recently started a Full-Stack Web Developer certificate program through the University of Arizona. I enjoy tackling problems and resolving them. I love the logic and structure of coding. I look forward to growing in the coding platform with my new found skill. 
      </p>
      </div>
    </section>
  )
}

export default About