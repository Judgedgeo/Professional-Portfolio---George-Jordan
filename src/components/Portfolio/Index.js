import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "Less Waste, More Taste",
    image:
      "https://user-images.githubusercontent.com/115055273/236050660-646ba2b4-263f-46b0-b15c-af20335dcd17.png",
    description:
      "Recipe App to help you use available ingredients in order to create you a Recipe.",
    repo: "https://github.com/jdalfaro4/Less_Waste_More_Taste",
    live: "https://less-waste-more-taste7.herokuapp.com/",
  },

  {
    id: 1,
    title: "Cutie Pies",
    image:
      "https://user-images.githubusercontent.com/115055273/236050540-162c8515-1c84-4618-be7f-464053b8d184.png",
    description: "A website you can order your favorite pies from.",
    repo: "https://github.com/jdalfaro4/Cutie-Pies",
    live: "https://jdalfaro4.github.io/Cutie-Pies/",
  },

  {
    id: 2,
    title: "The Daily Grind",
    image:
      "https://user-images.githubusercontent.com/115055273/236050622-02733518-d47b-4b3b-816c-462a1a6bf8d5.png",
    description: "A daily Calendar to keep yourself organized.",
    repo: "https://github.com/Judgedgeo/The-Daily-Grind",
    live: "https://judgedgeo.github.io/The-Daily-Grind/",
  },

  {
    id: 3,
    title: "The Weather Detector",
    image:
      "https://user-images.githubusercontent.com/115055273/236072418-0f7cb8f7-3520-4244-854b-7eac99cf781c.png",

    description: "An App to see the weather forcast in your city",
    repo: "https://github.com/Judgedgeo/The-Weather-Detector",
    live: "https://judgedgeo.github.io/The-Weather-Detector/",
  },

  {
    id: 4,
    title: "Power Gen",
    image:
      "https://user-images.githubusercontent.com/115055273/236050642-a8a8bb67-66ab-4784-b5ae-40ded5ec9493.png",
    description: "An App to create secure passwords for you.",
    repo: "https://github.com/Judgedgeo/Power-Gen",
    live: "https://judgedgeo.github.io/Power-Gen/",
  },

  {
    id: 5,
    title: "Big Brother Employee Tracker",
    image:
      "https://user-images.githubusercontent.com/115055273/236050281-2987fe21-cce0-4e7b-987f-df0d7ff2ceb5.png",
    description: "A rpogram to track your employees by department and titles",
    repo: "https://github.com/Judgedgeo/Big-Brother-Employee-Tracker",
    Video: "https://youtu.be/Fw4cr-QcVJs",
  },
];

function Portfolio() {
  return (
    <>
      <p className="content is-medium">Portfolio</p>
      <Project projects={projects} />
    </>
  );
}

export default Portfolio;
