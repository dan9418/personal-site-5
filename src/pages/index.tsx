import React from "react";
import headshot from "../../static/headshot.jpg";
import Button, { ButtonMode } from '../components/button/button';
import Icon from "../components/icon/icon";
import LinkPanel from "../components/link-panel/linkPanel";
import './index.scss';

const IndexPage = () => {
  return (
    <>
      <h1>
        Hi, I'm <b>Dan Bednarczyk</b>!
      </h1>
      <div className="intro">
        <img src={headshot} alt="Dan Bednarczyk Photo" />
        <div className="align">
          <p>
            I'm a web developer and multimedia artist currently based in Sacramento, CA and soon relocating to Pittsburgh, PA. I am passionate about music, art, plants, travel, and community.
          </p>
          <Button to="/resume" mode={ButtonMode.Link}>
            Professional Resume
            <Icon id="navRight" />
          </Button>
        </div>
      </div>

      <LinkPanel />
    </>
  )
}

export default IndexPage
