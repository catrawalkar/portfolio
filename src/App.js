import React, { useState } from "react";
import "./App.css";
import Particles from "react-particles-js";
import Heading from "./components/Heading/Heading";
import { themes } from "./themes";

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      }
    }
  }
};

const App = () => {
  let appStyle,
    paintTheme = useState(null);

  paintTheme = () => {
    var randomNumber = Math.floor(Math.random() * themes.length);

    let background = themes[randomNumber].background;
    let color = themes[randomNumber].color;

    appStyle = { background: background, color: color };
  };
  paintTheme();

  return (
    <div
      className="App"
      onClick={() => {
        console.log("clicked");
        paintTheme();
      }}
      style={appStyle}
    >
      <Heading />
      <Particles className="particles" params={particlesOptions} />
    </div>
  );
};

export default App;
