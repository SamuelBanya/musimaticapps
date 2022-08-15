import React from "react";

function Home({ color, username, city, state }) {
  return (
    <div id="home">
      <h1 style={{ color: color }}>
        {username} is a Web Developer from {city}, {state}
      </h1>
    </div>
  );
}

export default Home;
