import { Link } from "gatsby";
import React from "react";
import headshot from "../../../static/headshot.jpg";
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
                        <div className="city">Pittsburgh, PA</div>
                    </div>
                </Link>

                <div className="right">
                    <IconList />
                </div>
            </div>
        </nav>
    );
}

export default Header;