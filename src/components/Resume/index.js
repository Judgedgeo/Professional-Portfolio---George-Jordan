// Link to a downloadable resume
// a list of the my proficiencies

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

function Resume() {
  return (
    <section class="resumeimage" id="home">
    <div className="columns">
      <div className="column">
        <p className="content is-medium">Résumé</p>
        <hr />

        <a
          className="button is-primary"
          href={process.env.PUBLIC_URL + 'https://docs.google.com/document/d/1OBQ8_XvuMEEq1cD9mWG_KwodJTOjQMxO/edit?usp=share_link&ouid=102634967853494823784&rtpof=true&sd=true'}
          target="_blank" rel="noreferrer"
        >
          <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span id="download">Download My Resume</span>
        </a>
      </div>
      <div className="column">

        <hr />
        <p className="content is-medium">Skills</p>
        <ul>
            <li>HTML, CSS, Javascript</li>
            <li>OpenAPI, JSON</li>
            <li>React</li>
            <li>Markdown</li>
            <li>Git</li>
            <li>Github Repo Management</li>
        </ul>
      </div>
    </div>
    </section>
  );
}

export default Resume;