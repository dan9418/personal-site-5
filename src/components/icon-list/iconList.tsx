import React from "react";
import Icon from "../icon/icon";
import "./iconList.scss";

const IconList: React.FC<any> = ({ pageName }) => {
    return (
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
    );
}

export default IconList;