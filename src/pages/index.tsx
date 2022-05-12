import React from "react";
import headshot from "../assets/headshot.jpg";
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
            I'm a web developer and eclectic hobbyist currently based in Sacramento, CA and relocating to Pittsburgh, PA. I am passionate about music, art, plants, curiosity, and community.
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
