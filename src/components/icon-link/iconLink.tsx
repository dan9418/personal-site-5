import React from "react";
import Icon from "../icon/icon";
import "./iconLink.scss";

const IconLink: React.FC<any> = ({ href, text, iconId }) => {
    return (
        <a className="icon-link" target="_blank" href={href}>
            <Icon id={iconId} />
            {text}
        </a>
    );
}

export default IconLink;