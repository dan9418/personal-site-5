import { Link } from "gatsby";
import React from "react";
import headshot from "../../assets/headshot.jpg";
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
                            <a href="">
                                <Icon id="linkedin" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <Icon id="github" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <Icon id="bandcamp" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <Icon id="instagram" />
                            </a>
                        </li>
                    </ul>
                    <div className="divider" />
                    <ul className="link-list">
                        <li>
                            <Link to="/resume" className={pageName === 'resume' ? 'active' : ''}>
                                Resume
                            </Link>
                        </li>
                        <li>
                            <Link to="/portfolio" className={pageName === 'portfolio' ? 'active' : ''}>
                                Portfolio
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;