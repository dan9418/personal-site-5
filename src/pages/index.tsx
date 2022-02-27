import React from "react";
import headshot from "../assets/headshot.jpg";
import Button, { ButtonMode } from '../components/button';
import IconList from "../components/icon-list/iconList";
import Icon from "../components/icon/icon";
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
          <Button to="/resume" mode={ButtonMode.Link}>Professional Resume <Icon id="navRight" /></Button>
        </div>
      </div>

      <IconList />
    </div>
  )
}

export default IndexPage
