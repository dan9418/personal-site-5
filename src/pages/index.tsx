import { Link } from "gatsby";
import React from "react";
import Button from '../components/button';
import '../styles/global.scss';
import { indexModule } from './index.module.scss';

const IndexPage = () => {
  return (
    <main className={indexModule}>
      <title>Dan Bednarczyk</title>
      <h1>
        Hey there!
      </h1>
      <p>
        My name is <b>Dan Bednarczyk</b> and I'm a web developer and eclectic hobbyist based in Sacramento, CA. I am passionate about music, art, plants, travel, fitness, and community develoment.
      </p>
      <Link to="/resume">
        <Button>Technical Resume</Button>
      </Link>
    </main>
  )
}

export default IndexPage
