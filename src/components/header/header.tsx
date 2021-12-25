import { Link } from "gatsby";
import React from "react";
import headshot from "../../assets/headshot.jpg";
import Button, { ButtonMode } from "../button";
import Icon from "../icon/icon";
import "./header.scss";

const Header: React.FC<any> = ({ pageName }) => {
    return (
        <nav className="header">
            <div className="width-cap">
                <Link to="/" className="left">
                    <img src={headshot} alt="Dan Bednarczyk Photo" />
                    <div className="details">
                        <div className="name">Dan Bednarczyk</div>
                        <div className="city">Sacramento, CA</div>
                    </div>
                </Link>

                <div className="right">
                    <ul className="icon-list">
                        <li>
                            <a target="_blank" href="https://www.linkedin.com/in/danielbednarczyk/">
                                <Icon id="linkedin" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://github.com/dan9418/">
                                <Icon id="github" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.instagram.com/pineapple_dan_creates/">
                                <Icon id="instagram" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://open.spotify.com/artist/04pnwkbpBItHPWSuL5UAYY?si=VBizxZcESVCOIhPmChdUuQ">
                                <Icon id="spotify" />
                            </a>
                        </li>
                        {/*<li>
                            <a target="_blank" href="https://music.apple.com/us/artist/pineapple-dan/1590781822">
                                <Icon id="apple" />
                            </a>
                        </li>*/}
                        <li>
                            <a target="_blank" href="https://danbednarczyk.bandcamp.com/">
                                <Icon id="bandcamp" />
                            </a>
                        </li>

                    </ul>
                    <div className="divider" />
                    <ul className="link-list">
                        <li>
                            <Button to="/resume" isActive={pageName === 'resume'} mode={ButtonMode.White}>
                                Resume
                            </Button>
                        </li>
                        <li>
                            <Button to="/portfolio" isActive={pageName === 'portfolio'} mode={ButtonMode.White}>
                                Portfolio
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;