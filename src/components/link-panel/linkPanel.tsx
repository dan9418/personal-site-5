import React from "react";
import { LINK_APPLE_MUSIC, LINK_BANDCAMP, LINK_GITHUB, LINK_INSTAGRAM, LINK_LINKED_IN, LINK_PLAY_WHAT, LINK_SPOTIFY, LINK_WEEKLY_BEATS } from "../../data/links.data";
import IconLink from "../icon-link/IconLink";
import './linkPanel.scss';

const LinkPanel = () => {
    return (
        <section className="link-panel">
            <div>
                <h3>Music</h3>
                <ul>
                    <li>
                        <IconLink
                            href={LINK_SPOTIFY}
                            text="Spotify"
                            iconId="spotify"
                        />
                    </li>
                    <li>
                        <IconLink
                            href={LINK_BANDCAMP}
                            text="Bandcamp"
                            iconId="bandcamp"
                        />
                    </li>
                    <li>
                        <IconLink
                            href={LINK_APPLE_MUSIC}
                            text="Apple Music"
                            iconId="music"
                        />
                    </li>
                    <li>
                        <IconLink
                            href={LINK_WEEKLY_BEATS}
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
                            href={LINK_INSTAGRAM}
                            text="Instagram"
                            iconId="instagram"
                        />
                    </li>
                    <li>
                        <IconLink
                            to="/portfolio"
                            text="Portfolio"
                            iconId="art"
                        />
                    </li>
                </ul>
            </div>
            <div>
                <h3>Software</h3>
                <ul>
                    <li>
                        <IconLink
                            href={LINK_GITHUB}
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
                            href={LINK_PLAY_WHAT}
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
                            href={LINK_LINKED_IN}
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

