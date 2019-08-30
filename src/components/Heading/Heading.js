import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faTwitter,
  faLinkedin,
  faFreeCodeCamp,
  faCodepen,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Heading.module.css";
import "./hover.css";

class Heading extends Component {
  state = {
    HeadingStyle: null
  };
  componentDidMount() {
    this.paintTheme();
  }

  paintTheme = () => {
    // var randomNumber = Math.floor(Math.random() * themes.length);
    this.setState({
      HeadingStyle: { background: "#3dc0b0", color: "#FAFAFA" }
    });
    // HeadingStyle.background
    // $("main").css({
    //   background: themes[randomNumber].background,
    //   color: themes[randomNumber].color
    // });
    // $("main .icons-social a").css({
    //   color: themes[randomNumber].color
    // });
    // $("main .icons-social a svg path").css({
    //   fill: themes[randomNumber].color
    // });
  };

  render() {
    return (
      <div
        className={styles.Heading}
        // style={this.state.HeadingStyle}
        // onClick={() => this.paintTheme}
      >
        <div className={styles.Intro}>Hello, I'm Chinmay!</div>
        <div className={styles.Tagline}>Full-Stack Dev | Code Fanatic</div>
        <div className="instruction">
          <em>(click anywhere to interact)</em>
        </div>
        <hr />
        <div className={styles.IconSocial}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="hvr-float-shadow"
            href="https://github.com/catrawalkar"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="hvr-float-shadow"
            href="https://twitter.com/catrawalkar"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="hvr-float-shadow"
            href="https://www.linkedin.com/in/chinmay-atrawalkar-65341714"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="hvr-float-shadow"
            href="https://www.freecodecamp.org/catrawalkar"
          >
            <FontAwesomeIcon icon={faFreeCodeCamp} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="hvr-float-shadow"
            href="https://codepen.io/catrawalkar"
          >
            <FontAwesomeIcon icon={faCodepen} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="hvr-float-shadow"
            href="https://facebook.com/catrawalkar"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="hvr-float-shadow"
            href="https://instagram.com/chinmay_711"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    );
  }
}
export default Heading;
