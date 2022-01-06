import React, { useEffect, useState } from "react";
import headshot from "../assets/headshot.jpg";
import Button, { ButtonMode } from '../components/button';
import IconList from "../components/icon-list/iconList";
import '../styles/global.scss';
import './index.scss';

const IndexPage = () => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => setHasMounted(true), []);
  return (
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
        <Button to="/resume" mode={ButtonMode.Link}>Professional Resume</Button>
        <Button to="/portfolio" mode={ButtonMode.Link}>Creative Portfolio</Button>
      </div>
      <IconList />
      {hasMounted && <div className="email">dpbednarczyk@gmail.com</div>}
    </div>
  )
}

export default IndexPage
