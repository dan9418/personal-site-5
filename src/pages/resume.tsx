import { Link } from "gatsby";
import React from "react";
import Button from '../components/button';
import '../styles/_styles.scss';

const ResumePage = () => {
    return (
        <main className="home-page">
            <title>Dan Bednarczyk - Resume</title>
            <h1>
                Resume
            </h1>
            <Link to="/">
                <Button>Home</Button>
            </Link>
        </main>
    )
}

export default ResumePage
