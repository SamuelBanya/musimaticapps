import React from "react";
import Links from "./Links";

function About({ bio, links }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && bio.length > 1 ? <p>{bio}</p> : null}
      <img
        src="https://i5.walmartimages.com/asr/948f95bc-f8fa-4312-8feb-e53c946d1dd5.eb24c5ac2ecb1217d9251230023f0a8d.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
        alt="Garfifeld"
      />
      <Links github={links.github} linkedin={links.linkedin} />
    </div>
  );
}

export default About;
