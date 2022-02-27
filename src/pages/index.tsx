import React from "react";
import headshot from "../assets/headshot.jpg";
import Button, { ButtonMode } from '../components/button/button';
import IconLink from "../components/icon-link/IconLink";
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

      <section>
        <h2 className="caption">
          Find me online as @pineapple_dan:
        </h2>
        <div>
          <h2>Music</h2>
          <ul>
            <li>
              <IconLink
                href="https://open.spotify.com/artist/37bMMmv82uI3xhb0S8hL9V?si=HTEihmXtSt-aBan4obvTJQ"
                text="Spotify"
                iconId="spotify"
              />
            </li>
            <li>
              <IconLink
                href="https://danbednarczyk.bandcamp.com/"
                text="Bandcamp"
                iconId="bandcamp"
              />
            </li>
            <li>
              <IconLink
                href="https://music.apple.com/us/artist/pineapple-dan/1590781822"
                text="Apple Music"
                iconId="music"
              />
            </li>
            <li>
              <IconLink
                href="https://weeklybeats.com.com/pineapple_dan/"
                text="Weekly Beats"
                iconId="music"
              />
            </li>
          </ul>
        </div>
        <div>
          <h2>Art</h2>
          <ul>
            <li>
              <IconLink
                href="https://www.instagram.com/pineapple_dan_creates/"
                text="Instagram"
                iconId="instagram"
              />
            </li>
          </ul>
        </div>
        <div>
          <h2>Software</h2>
          <ul>
            <li>
              <IconLink
                href="https://github.com/dan9418/"
                text="GitHub"
                iconId="github"
              />
            </li>
            <li>
              <IconLink
                href="https://www.play-what.com/"
                text="Play What? [BETA]"
                iconId="music"
              />
            </li>
          </ul>
        </div>
        <div>
          <h2>Contact</h2>
          <ul>
            <li>
              <IconLink
                href="https://www.linkedin.com/in/danielbednarczyk/"
                text="LinkedIn"
                iconId="linkedin"
              />
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default IndexPage




/*<h2>Play What</h2>
<h2>Music</h2>
<h2>The Vectors</h2>
<h2>Other</h2>
<h2>Drawings</h2>
<h2>Graphic Design</h2>
<h2>Album Covers</h2>
<h2>Snapchat Filters</h2>
<h2>College T-Shirts</h2>
<h2>High School Photoshop Projects</h2>
<h2>Tattoos</h2>*/