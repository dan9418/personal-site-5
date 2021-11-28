import React from "react";
import Page from "../components/page/page";
import "./portfolio.scss";

const ResumePage = () => {
    return (
        <Page pageName="portfolio" pageTitle="Portfolio">
            <section style={{ padding: '16px' }} >
                <h2>Sorry!</h2>
                <p>This page is still under construction.</p>
                <p>For now, here are some links where you can check out my projects elsewhere:</p>

                <h3>Music</h3>
                <ul>
                    <li><a target="_blank" href="https://open.spotify.com/artist/04pnwkbpBItHPWSuL5UAYY?si=VBizxZcESVCOIhPmChdUuQ">Spotify</a></li>
                    <li><a target="_blank" href="https://music.apple.com/us/artist/pineapple-dan/1590781822">Apple Music</a></li>
                    <li><a target="_blank" href="https://pineapple-dan.bandcamp.com/">Bandcamp</a></li>
                </ul>
                <h3>Art</h3>
                <ul>
                    <li><a target="_blank" href="https://www.instagram.com/pineapple_dan_creates/">Instagram</a></li>
                </ul>
                <h3>Software</h3>
                <ul>
                    <li><a target="_blank" href="https://github.com/dan9418/">GitHub</a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/danielbednarczyk/">LinkedIn</a></li>
                </ul>

                {/*<h2>Play What</h2>
                <h2>Music</h2>
                <h3>pineapple_dan</h3>
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

        </Page >
    )
}

export default ResumePage
