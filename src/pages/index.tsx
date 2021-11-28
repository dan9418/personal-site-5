import { Link } from "gatsby";
import React from "react";
import headshot from "../assets/headshot.jpg";
import Button from '../components/button';
import Page from "../components/page/page";
import '../styles/global.scss';
import './index.scss';

const IndexPage = () => {
  return (
    <Page pageName="index" pageTitle="Home">
      <div className="content">
        <h1>
          Hi, I'm <b>Dan Bednarczyk</b>!
        </h1>
        <div className="intro">
          <img src={headshot} alt="Dan Bednarczyk Photo" />
          <p>
            I'm a web developer and eclectic hobbyist based in Sacramento, CA. I am passionate about music, art, plants, travel, fitness, and community develoment.
          </p>
        </div>

        <div className="buttons">
          <Link to="/resume">
            <Button>Professional Resume</Button>
          </Link>
          <Link to="/porfolio">
            <Button>Personal Portfolio</Button>
          </Link>
        </div>
      </div>
    </Page>
  )
}

export default IndexPage
