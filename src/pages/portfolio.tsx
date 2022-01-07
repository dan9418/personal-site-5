import { Link } from "gatsby";
import React from "react";
import "./portfolio.scss";

const ResumePage = () => {
    return (
        <>
            <section style={{ padding: '16px' }} >
                <h2>Sorry!</h2>
                <p>This page is still under construction.</p>
                <p>For now, here are some links where you can check out my projects elsewhere:</p>

                <h3>Music</h3>
                <ul>
                    <li><a target="_blank" href="https://open.spotify.com/artist/37bMMmv82uI3xhb0S8hL9V?si=HTEihmXtSt-aBan4obvTJQ">Spotify</a></li>
                    {/*<li><a target="_blank" href="https://music.apple.com/us/artist/pineapple-dan/1590781822">Apple Music</a></li>*/}
                    <li><a target="_blank" href="https://danbednarczyk.bandcamp.com/">Bandcamp</a></li>
                </ul>
                <h3>Art & Botany</h3>
                <ul>
                    <li><a target="_blank" href="https://www.instagram.com/pineapple_dan_creates/">Instagram</a></li>
                </ul>
                <h3>Software</h3>
                <ul>
                    <li><Link to="/resume">Resume</Link></li>
                    <li><a target="_blank" href="https://github.com/dan9418/">GitHub</a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/danielbednarczyk/">LinkedIn</a></li>
                </ul>

                {/*<h2>Play What</h2>
                <h2>Music</h2>
                <h3>The Vectors</h3>
                <h3>Other</h3>
                <h2>Drawings</h2>
                <h2>Graphic Design</h2>
                <h3>Album Covers</h3>
                <h3>Snapchat Filters</h3>
                <h3>College T-Shirts</h3>
                <h3>High School Photoshop Projects</h3>
                <h2>Tattoos</h2>*/}
            </section>

        </ >
    )
}

export default ResumePage
