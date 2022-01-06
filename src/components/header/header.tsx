import { Link } from "gatsby";
import React from "react";
import headshot from "../../assets/headshot.jpg";
import Button, { ButtonMode } from "../button";
import IconList from "../icon-list/iconList";
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
                    <IconList />
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