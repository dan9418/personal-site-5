import React from "react";
import headshot from "../../static/headshot.jpg";
import show_poster from "../../static/show_poster.jpg";
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
        <img className="headshot" src={headshot} alt="Dan Bednarczyk Photo" />
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

      <section className="shows">
        <h2>Upcoming Shows</h2>
        <img className="show_poster" src={show_poster} alt="Dan Bednarczyk Photo" />
        <div>Fri, Aug 5th, 2022</div>
        <div>Doors 6:30 / Show 7-9</div>
        <div>w/ Mary Sand & n_ronvalez</div>
        <div>@ Musiclandira (1219 S St / Sacramento, CA)</div>
        <div>$10 / No One Turned Away For Lack Of Funds</div>
        <div>All Ages</div>
      </section>
    </>
  )
}

export default IndexPage
