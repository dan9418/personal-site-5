import { Link } from "gatsby";
import React from "react";
import headshot from "../../assets/headshot.jpg";
import Button from '../button';
import Icon from "../icon/icon";
import "./header.scss";

const Header: React.FC = ({ }) => {
    return (
        <nav className="header">
            <div className="width-cap">
                <div className="left">
                    <img src={headshot} alt="Dan Bednarczyk Photo" />
                    <div className="details">
                        <div className="name">Dan Bednarczyk</div>
                        <div className="title">Web Developer</div>
                        <div className="city">Sacramento, CA</div>
                    </div>
                </div>

                <div className="right">
                    <ul className="icon-list">
                        <li>
                            <a href="">
                                <Icon id="linkedin" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <Icon id="github" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;