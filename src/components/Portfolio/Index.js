
import React from "react";

import Project from "./Project";

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
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />
      <img src={require('../../images/LessWaste.png')}></img>

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;