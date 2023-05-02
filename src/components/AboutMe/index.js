// Recent Photo or Avatar
// Short Biography
import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Full Stack Developer looking to grow and apply the skills I have learned</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '../../assets/images/me.jpg'} alt="George K. Jordan"/>
      <p className="content is-italic mt-4">
        I'm George, I am a full stack developer looking to applymy leanrings and grow with a company that focuses ondeveloping people and their skill sets.
      </p>
      <p className="content">
        I have 30+ years of management experience, and now look to grow in a field where I can apply my leadership skills as well as what I have learned in full stack developing.
      </p>
    </div>
  );
}

export default About;