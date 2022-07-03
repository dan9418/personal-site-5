import React from "react";
import Icon from "../icon/icon";
import "./iconList.scss";

const IconList: React.FC<any> = ({ pageName }) => {
    return (
        <ul className="icon-list">
            <li>
                <a target="_blank" href="https://www.instagram.com/dan.bednarczyk/">
                    <Icon id="instagram" />
                </a>
            </li>
            <li>
                <a target="_blank" href="https://open.spotify.com/artist/37bMMmv82uI3xhb0S8hL9V?si=HTEihmXtSt-aBan4obvTJQ">
                    <Icon id="spotify" />
                </a>
            </li>
            <li>
                <a target="_blank" href="https://music.apple.com/us/artist/dan-bednarczyk/1590781822">
                    <Icon id="music" />
                </a>
            </li>
            <li>
                <a target="_blank" href="https://danbednarczyk.bandcamp.com/">
                    <Icon id="bandcamp" />
                </a>
            </li>
            <li>
                <a target="_blank" href="https://github.com/dan9418/">
                    <Icon id="github" />
                </a>
            </li>
            <li>
                <a target="_blank" href="https://www.linkedin.com/in/danielbednarczyk/">
                    <Icon id="linkedin" />
                </a>
            </li>
        </ul>
    );
}

export default IconList;