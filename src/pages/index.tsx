import React from "react";
import headshot from "../assets/headshot.jpg";
import Button, { ButtonMode } from '../components/button/button';
import Icon from "../components/icon/icon";
import LinkPanel from "../components/link-panel/linkPanel";
import '../styles/global.scss';
import './index.scss';

const IndexPage = () => {
  return (
    <div className="content">
      <h1>
        Hi, I'm <b>Dan Bednarczyk</b>!
      </h1>
      <div className="intro">
        <img src={headshot} alt="Dan Bednarczyk Photo" />
        <div className="align">

          <p>
            I'm a web developer and eclectic hobbyist based in Sacramento, CA and Pittsburgh, PA. I am passionate about music, art, plants, travel, fitness, and community development.
          </p>
          <Button to="/resume" mode={ButtonMode.Link}>
            Professional Resume
            <Icon id="navRight" />
          </Button>
        </div>
      </div>

      <LinkPanel />
    </div>
  )
}

export default IndexPage




/*<h3>Play What</h3>
<h3>Music</h3>
<h3>The Vectors</h3>
<h3>Other</h3>
<h3>Drawings</h3>
<h3>Graphic Design</h3>
<h3>Album Covers</h3>
<h3>Snapchat Filters</h3>
<h3>College T-Shirts</h3>
<h3>High School Photoshop Projects</h3>
<h3>Tattoos</h3>*/