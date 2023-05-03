
import React from "react";

import Project from "./Project";
{/* CANT GET PICS TO GENERATE */}
const projects = [
  {
    id: 0,
    title: "Less Waste, More Taste",
    languages: "java script, css, html",
    packages: "bcrypt, express.js, nodemon, heroku,axios, handlebars ",
    image: "/public/images/LessWaste.png",
    description: "Recipe App to help you use available ingredients in order to create you a Recipe.",
    repo: "https://github.com/jdalfaro4/Less_Waste_More_Taste",
    live: "https://less-waste-more-taste7.herokuapp.com/",
  },

{
    id: 1,
    title: "Cutie Pies",
    languages: "java script, css, html",
    packages: "",
    image: "/public/images/Cutie.png",
    description: "A website you can order your favorite pies from.",
    repo: "https://github.com/jdalfaro4/Cutie-Pies",
    live: "https://jdalfaro4.github.io/Cutie-Pies/",
  },

  {
    id: 2,
    title: "The Daily Grind",
    languages: "java script, css, html",
    packages: "Jquery, Moment",
    image: "/public/images/Daily-Grind.png",
    description: "A daily Calendar to keep yourself organized.",
    repo: "https://github.com/Judgedgeo/The-Daily-Grind",
    live: "https://judgedgeo.github.io/The-Daily-Grind/",
  },

  {
    id: 3,
    title: "G1 Killer Site",
    languages: "java script, css, html",
    packages: "",
    image: "/public/images/",
    description: "",
    repo: "https://github.com/Judgedgeo/G1-Killer-Site",
    live: "https://judgedgeo.github.io/G1-Killer-Site/",
  },

  {
    id: 4,
    title: "Power Gen",
    languages: "java script, css, html",
    packages: "",
    image: "/public/images/",
    description: "An App to create secure passwords for you.",
    repo: "https://github.com/Judgedgeo/Power-Gen",
    live: "https://judgedgeo.github.io/Power-Gen/",
  },

  {
    id: 5,
    title: "Big Brother Employee Tracker",
    languages: "java script, css, html",
    packages: "",
    image: "/public/images/",
    description: "A rpogram to track your employees by department and titles",
    repo: "https://github.com/Judgedgeo/Big-Brother-Employee-Tracker",
    Video: "https://youtu.be/Fw4cr-QcVJs",
  },
];

function Portfolio() {
  return (
<>
      <p className="content is-medium">Portfolio</p>


      <Project projects={projects}/>
    </>
  )
};

export default Portfolio;