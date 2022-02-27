import { Link } from "gatsby";
import React from "react";
import Icon from "../icon/icon";
import "./iconLink.scss";

const IconLink: React.FC<any> = ({ text, iconId, isBeta, ...rest }) => {
    const Tag = rest.to ? Link : 'a';
    const target = rest.to ? undefined : '_blank';
    return (
        <Tag className="icon-link" target={target} {...rest}>
            <Icon id={iconId} />
            {text}
            {isBeta && <div className="beta">{` [BETA]`}</div>}
        </Tag>
    );
}

export default IconLink;