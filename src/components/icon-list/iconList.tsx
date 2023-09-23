import React from "react";
import { LINK_APPLE_MUSIC, LINK_BANDCAMP, LINK_GITHUB, LINK_INSTAGRAM, LINK_LINKED_IN, LINK_SPOTIFY } from "../../data/links.data";
import Icon from "../icon/icon";
import "./iconList.scss";

const IconList: React.FC<any> = ({ pageName }) => {
    return (
        <ul className="icon-list">
            <li>
                <a target="_blank" href={LINK_INSTAGRAM}>
                    <Icon id="instagram" />
                </a>
            </li>
            <li>
                <a target="_blank" href={LINK_SPOTIFY}>
                    <Icon id="spotify" />
                </a>
            </li>
            <li>
                <a target="_blank" href={LINK_APPLE_MUSIC}>
                    <Icon id="music" />
                </a>
            </li>
            <li>
                <a target="_blank" href={LINK_BANDCAMP}>
                    <Icon id="bandcamp" />
                </a>
            </li>
            <li>
                <a target="_blank" href={LINK_GITHUB}>
                    <Icon id="github" />
                </a>
            </li>
            <li>
                <a target="_blank" href={LINK_LINKED_IN}>
                    <Icon id="linkedin" />
                </a>
            </li>
        </ul>
    );
}

export default IconList;