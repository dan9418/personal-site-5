import React from "react";
import IconLink from "../icon-link/IconLink";
import './linkPanel.scss';

const LinkPanel = () => {
    return (
        <section className="link-panel">
            <h2>
                Find me online as <span><b>@pineapple_dan</b> and <b>@dan9418</b></span>
            </h2>
            <div>
                <h3>Music</h3>
                <ul>
                    <li>
                        <IconLink
                            href="https://open.spotify.com/artist/37bMMmv82uI3xhb0S8hL9V?si=HTEihmXtSt-aBan4obvTJQ"
                            text="Spotify"
                            iconId="spotify"
                        />
                    </li>
                    <li>
                        <IconLink
                            href="https://danbednarczyk.bandcamp.com/"
                            text="Bandcamp"
                            iconId="bandcamp"
                        />
                    </li>
                    <li>
                        <IconLink
                            href="https://music.apple.com/us/artist/pineapple-dan/1590781822"
                            text="Apple Music"
                            iconId="music"
                        />
                    </li>
                    <li>
                        <IconLink
                            href="https://weeklybeats.com.com/pineapple_dan/"
                            text="Weekly Beats"
                            iconId="music"
                        />
                    </li>
                </ul>
            </div>
            <div>
                <h3>Art</h3>
                <ul>
                    <li>
                        <IconLink
                            href="https://www.instagram.com/pineapple_dan_creates/"
                            text="Instagram"
                            iconId="instagram"
                        />
                    </li>
                </ul>
            </div>
            <div>
                <h3>Software</h3>
                <ul>
                    <li>
                        <IconLink
                            href="https://github.com/dan9418/"
                            text="GitHub"
                            iconId="github"
                        />
                    </li>
                    <li>
                        <IconLink
                            to="/resume"
                            text="Resume"
                            iconId="software"
                        />
                    </li>
                    <li>
                        <IconLink
                            href="https://www.play-what.com/"
                            text="Play What?"
                            iconId="music"
                            isBeta={true}
                        />
                    </li>
                </ul>
            </div>
            <div>
                <h3>Contact</h3>
                <ul>
                    <li>
                        <IconLink
                            href="https://www.linkedin.com/in/danielbednarczyk/"
                            text="LinkedIn"
                            iconId="linkedin"
                        />
                    </li>
                </ul>
            </div>
        </section>

    )
}

export default LinkPanel

